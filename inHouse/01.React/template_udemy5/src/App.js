import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleBtnHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleBtnHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
