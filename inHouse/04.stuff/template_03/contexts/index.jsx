import { createContext, useState } from "react";

export const MapInfoContextStore = createContext();

const MapInfoContext = (props) => {
  const [isLocation, setIsLocation] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [comData, setComData] = useState();
  const [isfilteredNumber, setIsfilteredNumber] = useState();
  const [bounds, setBounds] = useState();

  const MapInfoStore = {
    isLocation,
    setIsLocation,
    comData,
    setComData,
    isfilteredNumber,
    setIsfilteredNumber,
    bounds,
    setBounds,
  };

  return (
    <MapInfoContextStore.Provider value={MapInfoStore}>
      {props.children}
    </MapInfoContextStore.Provider>
  );
};

export default MapInfoContext;
