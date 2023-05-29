import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

// useFrame은 Canvas component 하위에서 사용이 가능하므로, Mesh와 그 하위 component들을 별도로 분리했다.
const MeshComponent = () => {
  const meshRef = useRef<Mesh>(null);
  // 매 frame마다 실행되는 hook이며, 이를 이용하여 애니메이션을 구현할 수 있다.
  useFrame(() => {
    const mesh = meshRef.current;
    if (mesh) {
      mesh.position.y += 0.001;
      mesh.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={"#61dafb"} />
    </mesh>
  );
};

const App = () => {
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
        <OrbitControls dampingFactor={0.05} />
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"#61dafb"} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;
