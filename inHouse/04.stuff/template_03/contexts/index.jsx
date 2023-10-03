import { createContext, useState } from "react";

const MapInfoContextStore = createContext();

const MapInfoContext = (props) => {
  const MapInfoStore = {
    //여기다가 state들 쓰면 됨.
  };

  return (
    <MapInfoContextStore.Provider value={MapInfoStore}>
      {props.children}
    </MapInfoContextStore.Provider>
  );
};

export default MapInfoContext;