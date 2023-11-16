import * as THREE from "./node_modules/three/build/three.module.js";

const scene = new THREE.Scene(); // 장면
scene.background = new THREE.Color(0x004fff);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
); // 카메라
const renderer = new THREE.WebGL1Renderer(); // 렌더러
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

renderer.render(scene, camera); // 렌더러 내에 장면과 카메라를 추가
