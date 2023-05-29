import "./App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    // 전에 vanilaJS에서 했던 결과물과 동일하게 나오도록 style 코드를 추가함.
    <div style={{ width: "100vw", height: "100vh", background: "#000" }}>
      <Canvas // fiber에 내장된 canvas 객체이다.
        camera={{
          // camera를 props로 추가했다.
          isPerspectiveCamera: true,
          fov: 75,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.01,
          far: 1000,
          position: [0, 2, 5],
        }} //Canvas 하위에 추가될 mesh를 component로 추가하였다.
      >
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"firebrick"} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
