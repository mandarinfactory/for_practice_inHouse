import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import MapInfoContext from "../contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MapInfoContext>
    <App />
  </MapInfoContext>
);
