import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
//import Geolocation from "@react-native-community/geolocation";

//import getAptTradeAPI from "./API/RealEstate/aptIndex";
//import getWeatherDataAPI from "./API/weather";

import Detail from "./components/Detail";
import Home from "./components/Home";
/* components&scrrens */

import useFonts from "./hooks/useFonts";
/* custom-hooks */

//import getLocationAndroidHandler from "./android/permissionAndroid";
/* Natives-Permission */

export default function App() {
  const [apartmentData, setApartmentData] = useState();
  const [weatherData, setWeatherData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isFont, setIsFont] = useState(false);
  const [isAptPressed, setIsAptPressed] = useState(false);
  const [pressedAptData, setPressedAptData] = useState();

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
    const headers = "&pageNo=1&numOfRows=10&LAWD_CD=11110&DEAL_YMD=202308";
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
      let aptData = JSONData.response.body[0].items[0].item;
      setApartmentData(aptData);
    });
  };

  const getWeatherDataAPI = async () => {
    const today = new Date();

    let year = today.getFullYear();
    let month = ("0" + (new Date().getMonth() + 1)).slice(-2);
    let day = ("0" + new Date().getDate()).slice(-2);
    let date = `${year}${month}${day}`;

    let hours = today.getHours();
    if (parseInt(hours) < 10) {
      hours = `0${hours}00`;
    } else hours = `${hours}00`;

    const API_URL =
      "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";
    const API_KEY =
      "24vbFaV5oWpSo3qOGdwCXPO%2FX5gr4tqD2gxEwUJWb2xVcv4sWZ5QmmZruySMYWl2471GK88wVe3zjfacPH%2FENQ%3D%3D";
    const headers = `&pageNo=1&numOfRows=10&dataType=JSON&base_date=${date}&base_time=${hours}&nx=60&ny=127`;
    const reqestAPI_URL = `${API_URL}?serviceKey=${API_KEY}${headers}`;
    const json = await (await fetch(reqestAPI_URL)).json();
    const rawWeatherData = json.response?.body?.items?.item;
    setWeatherData(rawWeatherData);
  };

  useEffect(() => {
    setIsFont(true);
    getAptTradeAPI();
    getWeatherDataAPI();
    //getLocationAndroidHandler();
  }, []);

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
      apartmentData={apartmentData}
      weatherData={weatherData}
      setIsAptPressed={setIsAptPressed}
      setPressedAptData={setPressedAptData}
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
  }

  return (
    <>
      <StatusBar style="light" />
      <DismissKeyboard>
        <ScrollView>
          <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
        </ScrollView>
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
