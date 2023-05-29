import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  //안티알리아싱method
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const app = document.querySelector("#app");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // fov(시야각)값이다.
  window.innerWidth / window.innerHeight, // aspect ratio 값으로써, 카메라의 가로세로 비율값이다.
  0.1, // near값이다. (이 거리보다 가까운 객체는 카메라에 담기지 않는다.)
  1000 // far값이다. (이 거리보다 먼 객체는 카메라에 담기지 않는다.)
);
const geometry = new THREE.BoxGeometry(1, 1, 1);
// 간단하게 박스모양의 geometry를 추가하고, 너비, 높이, 깊이를 각각 1,1,1로 설정한다.

const material = new THREE.MeshStandardMaterial({ color: "#f7df1e" });
// 빛의 영향을 받지 않는 MeshBasicMaterial을 추가하고, 원하는 색을 넣는다.
// Basic --> Standard로 바꿈으로써, 빛의 영향을 받도록 한다.

const mesh = new THREE.Mesh(geometry, material);
// mesh에 앞서 만든 geometry와 material을 인자로 넣어서 만든다.

const orbitControls = new OrbitControls(camera, renderer.domElement);
/* orbitControls --> orbit이 바뀔때마다, 바뀐 앵글에 대한 새로운 장면을 rendering 해야하므로,
setAnimationLoop함수를 이용해 재귀적으로 무한히 실행한다. */

//const ambientLight = new THREE.AmbientLight();
// 모든 곳에 같은 밝기를 제공하는 AmbientLight를 만들고 scene에 추가한다.
//ambientLight.intensity = 0.7; // 밝기를 조절할 수 있다.
//scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(); // 직사광선같은 조명method
directionalLight.position.set(3, 3, 3); // 약간우측앞쪽에서 조명이 발사되도록 조정했다.
directionalLight.lookAt(0, 0, 0);
directionalLight.castShadow = true; // light로 인해 그림자 생기게 하기 위해 속성을 true로 해야한다.
directionalLight.shadow.mapSize.width = 2048; // 각각 width, height값을 조정해 그림자의 퀄리티 조정이 가능하다.
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.far = 60;
scene.add(directionalLight);

const floorGeometry = new THREE.PlaneGeometry(100, 100);
const floorMaterial = new THREE.MeshStandardMaterial();
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
// mesh가 놓여있을 평면 mesh를 생성하고 추가했다.
floorMesh.rotation.x = -Math.PI / 2; // 평면이 수직으로 서있는 형태이므로 -90도만큼 회전시켜준다.
floorMesh.position.y -= 0.5;
floorMesh.receiveShadow = true; // mesh가 자신에게 그림자가 드리워지게 하려면 true로 해야한다.
scene.add(floorMesh);

orbitControls.enableDamping = true;
// orbit을 변경할때, enableDamping 속성을 true로 주게되면 부자연스러울 정도로 딱딱 끊기게 멈추는 현상을 막을 수 있다.
orbitControls.dampingFactor = 0.05;
// dampingFactor의 값을 작게하면 damping(drag가 멈췄을때, 조금 더 움직이는 느낌)을 강화할 수 있다.

const renderHandler = () => {
  orbitControls.update();
  renderer.render(scene, camera);
  renderer.setAnimationLoop(renderHandler);
  //mesh.position.y += 0.001;
  // 매 frame마다 mesh의 y좌표를 0.001만큼 올려준다.(위로 올라간다.)
  //mesh.rotation.y += 0.01;
  /* 매 frame마다 mesh를 y축에 대하여 0.01 radian만큼 회전시킨다. 
  (y축이 중심기둥이 되고 롯데월드 회전컵처럼 빙글빙글 회전한다.) */
};

camera.position.z = 5; // 카메라와 Z축 위치를 5로 바꿔준다.
camera.position.y = 2; // 카메라와 y축 위치를 2로 바꿔준다.
scene.add(camera);
scene.add(mesh); //scene에 방금 만든 mesh를 추가한다.
app.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);

// 브라우저의 크기를 조작하는 행위는 resize-event이므로, 해당 event 발생 시,
// callback함수 내에서 camera의 aspect와, renderer의 size를 재설정해주면 된다.
const resizeHandler = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  // 바뀐 브라우저의 가로, 세로를 카메라의 aspect로 설정한다.(비율설정)
  camera.updateProjectionMatrix();
  // 바뀐 속성대로 카메라를 업데이트 해주는 method라고 생각하면 된다.
  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer의 사이즈를 바뀐 브라우저의 가로, 세로 크기로 정해준다.
  renderer.render(scene, camera);
  // 바뀐 속성대로 rendering해준다.
};
window.addEventListener("resize", resizeHandler); // resize-event

renderHandler();
