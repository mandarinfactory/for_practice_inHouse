import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MovieInfoContext from "./contexts/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MovieInfoContext>
    <App />
  </MovieInfoContext>
);
