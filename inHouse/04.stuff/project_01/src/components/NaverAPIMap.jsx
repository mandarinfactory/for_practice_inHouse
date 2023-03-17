import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
import "./naverApiMap.scss";

export const NaverAPIMap = (props) => {
  return (
    <RenderAfterNavermapsLoaded clientId={"ZdE2qsJndT2saDiFU7Qz7cvdKfAuV9epIJTJnVtz"}>
      <NaverMap
        id={"map"}
        mapDivId={"react-naver-map"} // default name
        style=
        defaultCenter={1}
        defaultZoom={10}
      />
    </RenderAfterNavermapsLoaded>
  );
};

export default NaverAPIMap;