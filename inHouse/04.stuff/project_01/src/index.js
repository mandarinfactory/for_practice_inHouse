import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";

ReactDOM.render(
  <React.StrictMode>
    <RenderAfterNavermapsLoaded ncpClientId={"ZdE2qsJndT2saDiFU7Qz7cvdKfAuV9epIJTJnVtz"}>
      <App />
    </RenderAfterNavermapsLoaded>
  </React.StrictMode>,
  document.getElementById("root")
);