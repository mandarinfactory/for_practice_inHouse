import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model } from "./components/Model";

const color = 0xffffff;
const intensity = 1;

function App() {
  return (
    <Canvas
      camera={{
        fov: 30,
        near: 1,
        aspect: window.innerWidth / window.innerHeight,
        far: 1000,
        position: [0, 20, 90],
      }}
    >
      <pointLight color={color} intensity={intensity} />
      <directionalLight color={color} intensity={intensity} />
      <ambientLight color={color} intensity={intensity} />
      <Model />
    </Canvas>
  );
}

export default App;
