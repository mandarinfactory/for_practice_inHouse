import React from "react";
import "../css/Home.css";
import NaverApiMap from "./NaverAPIMap";

function Home() {
  return (
    <div className={"outline"}>
      <div className={"container"}>
        <div className="nav"> nav bar </div>
        <h1>Map</h1>
        <NaverApiMap></NaverApiMap>
        <div className={"map"}></div>
      </div>
    </div>
  );
}

export default Home;