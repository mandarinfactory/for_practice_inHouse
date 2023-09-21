import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import * as Location from "expo-location";
import addressData from "./API/realEstate/addressData.json";

import getFilteredGeoLocation from "./API/realEstate/index_geoLoc";

import Detail from "./components/Detail";
import Home from "./components/Home";
/* components&scrrens */

import useFonts from "./hooks/useFonts";
import geoLocationControler from "./API/weather/grid";
/* custom-hooks */

export default function App() {
  const [recentLocation, setRecentLocation] = useState();
  const [filteredDistrict, setFilteredDistrict] = useState();
  const [isLocationActive, setIsLocationActive] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isFont, setIsFont] = useState(false);
  const [searchTextValue, setSearchTextValue] = useState();

  const [apartmentData, setApartmentData] = useState();
  const [aptLocData, setAptLocData] = useState();
  const [pressedAptData, setPressedAptData] = useState();
  const [isAptPressed, setIsAptPressed] = useState(false);
  const [pressedAptLocData, setPressedAptLocData] = useState();
  const aptObj = { setState: setPressedAptLocData };

  const [weatherData, setWeatherData] = useState([]);
  const [weatherLocData, setWeatherLocData] = useState({});
  const weatherObj = { setState: setWeatherLocData };

  const getLocationHandler = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setIsLocationActive(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    if ((latitude, longitude)) {
      geoLocationControler("toXY", latitude, longitude, weatherObj);
    }
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setRecentLocation(location);
  };

  const findCityNumberHandler = () => {
    if (recentLocation) {
      addressData.forEach((v) => {
        if (
          v.시도명 == recentLocation[0].city &&
          v.읍면동명 == recentLocation[0].district
        ) {
          return (
            setAptLocData(v.법정동코드.toString().substring(0, 5)),
            setFilteredDistrict(v.시군구명)
          );
        } else {
          return false;
        }
      });
    }
  };

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  const getAptTradeAPI = async () => {
    const API_URL =
      "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev";
    const API_KEY =
      "24vbFaV5oWpSo3qOGdwCXPO%2FX5gr4tqD2gxEwUJWb2xVcv4sWZ5QmmZruySMYWl2471GK88wVe3zjfacPH%2FENQ%3D%3D";
    const headers =
      aptLocData !== undefined
        ? `&pageNo=1&numOfRows=10&LAWD_CD=${aptLocData}&DEAL_YMD=${aptdate}`
        : aptLocData;
    const reqestAPI_URL = `${API_URL}?serviceKey=${API_KEY}${headers}`;
    const response = await fetch(reqestAPI_URL)
      .then((res) => res)
      .catch((error) => {
        console.log(error);
      });
    const xmlString = await response.text();
    const parseString = require("react-native-xml2js").parseString;
    parseString(xmlString, (err, result) => {
      if (err !== null) {
        console.log("ERROR", err);
        return;
      }
      let rawData = JSON.stringify(result);
      let JSONData = JSON.parse(rawData);
      let aptData = JSONData?.response?.body[0].items[0].item;
      setApartmentData(aptData);
      setDataLoaded(true);
    });
  };
  const today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (new Date().getMonth() + 1)).slice(-2);
  let day = ("0" + new Date().getDate()).slice(-2);
  var aptdate = year + month;
  let date = `${year}${month}${day}`;

  let hours = today.getHours();
  if (parseInt(hours) < 10) {
    hours = `0${hours}00`;
  } else hours = `${hours}00`;

  const getWeatherDataAPI = async () => {
    const API_URL =
      "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";
    const API_KEY =
      "24vbFaV5oWpSo3qOGdwCXPO%2FX5gr4tqD2gxEwUJWb2xVcv4sWZ5QmmZruySMYWl2471GK88wVe3zjfacPH%2FENQ%3D%3D";
    const headers =
      weatherLocData !== undefined
        ? `&pageNo=1&numOfRows=10&dataType=JSON&base_date=${date}&base_time=${
            hours - 100
          }&nx=${weatherLocData.x}&ny=${weatherLocData.y}`
        : weatherLocData;
    const reqestAPI_URL = `${API_URL}?serviceKey=${API_KEY}${headers}`;
    const json = await (await fetch(reqestAPI_URL)).json();
    const rawWeatherData = json?.response?.body?.items?.item;
    setWeatherData(rawWeatherData);
  };

  useEffect(() => {
    setIsFont(true);
    getAptTradeAPI();
    getWeatherDataAPI();
    getLocationHandler();
    findCityNumberHandler();
  }, []);

  useEffect(() => {
    getWeatherDataAPI();
  }, [recentLocation, weatherLocData]);

  useEffect(() => {
    findCityNumberHandler();
    getAptTradeAPI();
  }, [recentLocation, aptLocData]);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={useFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.warn(error)}
      />
    );
  }

  let screen = (
    <Home
      recentLocation={recentLocation}
      filteredDistrict={filteredDistrict}
      apartmentData={apartmentData}
      weatherData={weatherData}
      setIsAptPressed={setIsAptPressed}
      setPressedAptData={setPressedAptData}
      setSearchTextValue={setSearchTextValue}
    />
  );

  if (isAptPressed) {
    screen = (
      <Detail
        isAptPressed={isAptPressed}
        setIsAptPressed={setIsAptPressed}
        apartmentData={apartmentData}
        pressedAptData={pressedAptData}
      />
    );
    getFilteredGeoLocation(pressedAptData, aptObj);
  }

  return (
    <>
      <StatusBar style="light" />
      <DismissKeyboard>
        <SafeAreaView style={styles.rootContainer}>
          {dataLoaded ? screen : dataLoaded}
        </SafeAreaView>
      </DismissKeyboard>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "black",
    height: 1000,
  },
});
