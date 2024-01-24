import { useState } from "react";
import { atom, useRecoilState } from "recoil";

import Counter from "./Counter";
import DisplayCounter from "./DisplayCounter";

import "./app.css";

function App() {
  return (
    <div>
      <Counter />
      <div>
        <DisplayCounter />
      </div>
    </div>
  );
}

export default App;
