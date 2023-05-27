import React, { useState, useCallback } from "react";
/* useCallback --> component 실행 전반에 걸쳐 함수를 저장할 수 있게 하는 hook이다. */
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleBtnHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}/>
      <Button onClick={toggleBtnHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
 