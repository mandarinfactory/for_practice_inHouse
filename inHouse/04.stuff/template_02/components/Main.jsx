import React, { useEffect, useState, useContext } from "react";
import AppLoading from "expo-app-loading";
import * as Location from "expo-location";

import addressData from "../API/realEstate/addressData.json";
import getFilteredGeoLocation from "../API/realEstate/getFilteredGeoLoc";
import getAptTradeAPI from "../API/realEstate/getAptTrade";
import getWeatherDataAPI from "../API/weather";
/* API */

import Home from "./Home";
import Detail from "./Detail";
import { AptInfoContextStore } from "../context";
/* components&screens */

import useFonts from "../hooks/useFonts";
import geoLocationControler from "../API/weather/grid";
/* custom-hooks */

export default function Main() {
  let pressedLocValue;
  const AptInfosCtx = useContext(AptInfoContextStore);

  const [isFont, setIsFont] = useState(false);
  AptInfosCtx.searchTextValue ? (
    (pressedLocValue = AptInfosCtx.searchTextValue?.법정동코드
      .toString()
      .substr(0, 5))
  ) : (
    <></>
  );
  const aptObj = { setState: AptInfosCtx.setPressedAptLocData };
  const weatherObj = { setState: AptInfosCtx.setWeatherLocData };

  const getLocationHandler = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      AptInfosCtx.setIsLocationActive(false);
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
    AptInfosCtx.setRecentLocation(location);
  };

  const findCityNumberHandler = () => {
    if (AptInfosCtx.recentLocation) {
      addressData.forEach((v) => {
        if (
          v.시도명 == AptInfosCtx.recentLocation[0].city &&
          v.읍면동명 == AptInfosCtx.recentLocation[0].district
        ) {
          return (
            AptInfosCtx.setAptLocData(v.법정동코드.toString().substring(0, 5)),
            AptInfosCtx.setFilteredDistrict(v.시군구명)
          );
        } else {
          return false;
        }
      });
    }
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

  useEffect(() => {
    setIsFont(true);
    getAptTradeAPI(AptInfosCtx, pressedLocValue);
    getWeatherDataAPI(AptInfosCtx);
    getLocationHandler();
    findCityNumberHandler();
  }, []);

  useEffect(() => {
    getWeatherDataAPI(AptInfosCtx);
  }, [AptInfosCtx.recentLocation, AptInfosCtx.weatherLocData]);

  useEffect(() => {
    findCityNumberHandler();
    getAptTradeAPI(AptInfosCtx, pressedLocValue);
  }, [AptInfosCtx.recentLocation, AptInfosCtx.aptLocData, pressedLocValue]);

  if (!AptInfosCtx.dataLoaded) {
    return (
      <AppLoading
        startAsync={useFonts}
        onFinish={() => AptInfosCtx.setDataLoaded(true)}
        onError={(error) => console.warn(error)}
      />
    );
  }

  let screen = <Home />;

  if (AptInfosCtx.isAptPressed) {
    screen = <Detail />;
    getFilteredGeoLocation(AptInfosCtx.pressedAptData, aptObj);
  }
  return (
    <>
      {AptInfosCtx.dataLoaded ? screen : AptInfosCtx.dataLoaded}
    </>
  );
}
