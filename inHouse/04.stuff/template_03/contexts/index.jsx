import { createContext, useState } from "react";

export const MapInfoContextStore = createContext();

const MapInfoContext = (props) => {
  const [isLocation, setIsLocation] = useState();
  const [comData, setComData] = useState();
  const [isfilteredNumber, setIsfilteredNumber] = useState();
  const [bounds, setBounds] = useState();
  const [placeName, setPlaceName] = useState();

  const MapInfoStore = {
    isLocation,
    setIsLocation,
    comData,
    setComData,
    isfilteredNumber,
    setIsfilteredNumber,
    bounds,
    setBounds,
    placeName,
    setPlaceName
  };

  return (
    <MapInfoContextStore.Provider value={MapInfoStore}>
      {props.children}
    </MapInfoContextStore.Provider>
  );
};

export default MapInfoContext;
