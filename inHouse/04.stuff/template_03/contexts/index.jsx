import { createContext, useState } from "react";

export const MapInfoContextStore = createContext();

const MapInfoContext = (props) => {
  const [isLocation, setIsLocation] = useState();
  const [isMarkerClicked, setIsMarkerClicked] = useState();
  const [isInfoBoxClicked, setIsInfoBoxClicked] = useState(false);
  const [comData, setComData] = useState();
  const [isfilteredNumber, setIsfilteredNumber] = useState();
  const [clickedMarkerData, setClickedMarkerData] = useState();
  const [bounds, setBounds] = useState();
  const [inputVal, setInputVal] = useState(false);
  const [filteredLat, setFilteredLat] = useState();
  const [filteredLng, setFilteredLng] = useState();

  const MapInfoStore = {
    isLocation,
    setIsLocation,
    isMarkerClicked,
    setIsMarkerClicked,
    isInfoBoxClicked,
    setIsInfoBoxClicked,
    comData,
    setComData,
    isfilteredNumber,
    setIsfilteredNumber,
    bounds,
    setBounds,
    inputVal,
    setInputVal,
    filteredLat,
    setFilteredLat,
    filteredLng,
    setFilteredLng
  };

  return (
    <MapInfoContextStore.Provider value={MapInfoStore}>
      {props.children}
    </MapInfoContextStore.Provider>
  );
};

export default MapInfoContext;
