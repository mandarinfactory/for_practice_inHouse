import { createContext, useState } from "react";

export const MapInfoContextStore = createContext();

const MapInfoContext = (props) => {
  const [isLocation, setIsLocation] = useState();
  const [isMarkerClicked, setIsMarkerClicked] = useState();
  const [isInfoBoxClicked, setIsInfoBoxClicked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [comData, setComData] = useState();
  const [isfilteredNumber, setIsfilteredNumber] = useState();
  const [filteredStoreClass, setFilteredStoreClass] = useState();
  const [clickedMarkerClass, setClickedMarkerClass] = useState();
  const [clickedMarkerAddress, setClickedMarkerAddress] = useState();
  const [clickedInfoBox, setClickedInfoBox] = useState();
  const [clickedMarkerIndex, setClickedMarkerIndex] = useState(null);
  const [bounds, setBounds] = useState();
  const [inputVal, setInputVal] = useState(false);
  const [filteredLat, setFilteredLat] = useState();
  const [filteredLng, setFilteredLng] = useState();

  const handleMarkerClick = (key) => {
    if (clickedMarkerIndex !== null) {
      const prevMarkerElement = document.querySelector(
        `.marker-${clickedMarkerIndex}`
      );
      prevMarkerElement.style.zIndex = 1;
      prevMarkerElement.style.color = "black";
    }
    const currentMarkerElement = document.querySelector(`.marker-${key}`);
    currentMarkerElement.style.zIndex = 3;
    currentMarkerElement.style.color = "#0f766e";

    setClickedMarkerIndex(key);
    setIsClicked(!isClicked);
  };

  const MapInfoStore = {
    isLocation,
    setIsLocation,
    isMarkerClicked,
    setIsMarkerClicked,
    isInfoBoxClicked,
    setIsInfoBoxClicked,
    isClicked,
    setIsClicked,
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
    clickedMarkerIndex,
    setClickedMarkerIndex,
    bounds,
    setBounds,
    inputVal,
    setInputVal,
    filteredLat,
    setFilteredLat,
    filteredLng,
    setFilteredLng,
    handleMarkerClick,
  };

  return (
    <MapInfoContextStore.Provider value={MapInfoStore}>
      {props.children}
    </MapInfoContextStore.Provider>
  );
};

export default MapInfoContext;
