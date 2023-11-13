import { createContext, useState } from "react";

export const MapInfoContextStore = createContext();

const MapInfoContext = (props) => {
  const [isLocation, setIsLocation] = useState();
  const [isMarkerClicked, setIsMarkerClicked] = useState();
  const [isInfoBoxClicked, setIsInfoBoxClicked] = useState(false);
  const [comData, setComData] = useState();
  const [isfilteredNumber, setIsfilteredNumber] = useState();
  const [filteredStoreClass, setFilteredStoreClass] = useState();
  const [clickedMarkerClass, setClickedMarkerClass] = useState();
  const [clickedMarkerAddress, setClickedMarkerAddress] = useState();
  const [clickedInfoBox, setClickedInfoBox] = useState();
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
    filteredStoreClass,
    setFilteredStoreClass,
    clickedMarkerClass,
    setClickedMarkerClass,
    clickedMarkerAddress,
    setClickedMarkerAddress,
    clickedInfoBox,
    setClickedInfoBox,
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
