import React, { createContext, useState } from "react";

export const AptInfoContextStore = createContext();

const AptInfoContext = (props) => {
  const [recentLocation, setRecentLocation] = useState();
  const [filteredDistrict, setFilteredDistrict] = useState();
  const [isLocationActive, setIsLocationActive] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [searchTextValue, setSearchTextValue] = useState();
  const [apartmentData, setApartmentData] = useState();
  const [aptLocData, setAptLocData] = useState();
  const [pressedAptData, setPressedAptData] = useState();
  const [isAptPressed, setIsAptPressed] = useState(false);
  const [pressedAptLocData, setPressedAptLocData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [weatherLocData, setWeatherLocData] = useState({});

  const AptInfoStore = {
    recentLocation,
    setRecentLocation,
    filteredDistrict,
    setFilteredDistrict,
    isLocationActive,
    setIsLocationActive,
    dataLoaded,
    setDataLoaded,
    searchTextValue,
    setSearchTextValue,
    apartmentData,
    setApartmentData,
    aptLocData,
    setAptLocData,
    pressedAptData,
    setPressedAptData,
    isAptPressed,
    setIsAptPressed,
    pressedAptLocData,
    setPressedAptLocData,
    weatherData,
    setWeatherData,
    weatherLocData,
    setWeatherLocData
  };

  return (
    <AptInfoContextStore.Provider value={AptInfoStore}>
      {props.children}
    </AptInfoContextStore.Provider>
  );
};

export default AptInfoContext;
