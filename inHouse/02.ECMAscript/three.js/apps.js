import * as THREE from "./node_modules/three/build/three.module.js";

const scene = new THREE.Scene(); // 장면
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
); // 카메라
const canvas = document.querySelector(".ex-03"); // 캔버스
const renderer = new THREE.WebGL1Renderer({canvas}); // 렌더러
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const render = (time) => {
  time *= 0.001;
  //cube.rotation.x = time;
  //cube.rotation.y = time;

  renderer.render(scene, camera); // 렌더러 내에 장면과 카메라를 추가

  requestAnimationFrame(render);
};
requestAnimationFrame(render);
