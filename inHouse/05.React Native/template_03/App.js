import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";

//import getAptTradeAPI from "./API/RealEstate/aptIndex";
//import getWeatherDataAPI from "./API/weather";
import HeaderScreen from "./screens/HeaderScreen";
import SearchScreen from "./screens/SearchScreen";
import HeroScreen from "./screens/HeroScreen";
import WeatherScreen from "./screens/WeatherScreen";

export default function App() {
  const [apartmentData, setApartmentData] = useState();
  const [weatherData, setWeatherData] = useState([]);
  const [isFont, setIsFont] = useState(false);

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
    const json = await (await fetch(reqestAPI_URL)
    ).json()
    const rawWeatherData = json.response?.body?.items?.item;
    setWeatherData(rawWeatherData);
  };

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        ExtraLight: require("./assets/font/SCDream3.otf"),
        Light: require("./assets/font/SCDream4.otf"),
        Regular: require("./assets/font/SCDream5.otf"),
        Bold: require("./assets/font/SCDream6.otf"),
        ExtraBold: require("./assets/font/SCDream7.otf"),
        Black: require("./assets/font/SCDream8.otf"),
      });
      setIsFont(true);
    };
    loadFonts();
    getAptTradeAPI();
    getWeatherDataAPI();
  }, []);

  useEffect(() => {
    getWeatherDataAPI();
  }, [weatherData]);

  return (
    <>
      <StatusBar style="light" />
      <DismissKeyboard>
        <SafeAreaView style={styles.rootContainer}>
          <HeaderScreen />
          <WeatherScreen weatherData={weatherData} />
          <SearchScreen />
          <HeroScreen apartmentData={apartmentData} />
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
