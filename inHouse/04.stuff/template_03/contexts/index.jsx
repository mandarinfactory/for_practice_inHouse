import { createContext, useState } from "react";

export const MapInfoContextStore = createContext();

const MapInfoContext = (props) => {
  const [isLocation, setIsLocation] = useState();
  const [isMarkerClicked, setIsMarkerClicked] = useState();
  const [comData, setComData] = useState();
  const [isfilteredNumber, setIsfilteredNumber] = useState();
  const [bounds, setBounds] = useState();
  const [inputVal, setInputVal] = useState();

  const MapInfoStore = {
    isLocation,
    setIsLocation,
    isMarkerClicked,
    setIsMarkerClicked,
    comData,
    setComData,
    isfilteredNumber,
    setIsfilteredNumber,
    bounds,
    setBounds,
    inputVal,
    setInputVal
  };

  return (
    <MapInfoContextStore.Provider value={MapInfoStore}>
      {props.children}
    </MapInfoContextStore.Provider>
  );
};

export default MapInfoContext;
