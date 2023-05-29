import "./style.css";
import * as THREE from "three";

const renderer = new THREE.WebGLRenderer();
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
const material = new THREE.MeshBasicMaterial({ color: "firebrick" });
// 빛의 영향을 받지 않는 MeshBasicMaterial을 추가하고, 원하는 색을 넣는다.
const mesh = new THREE.Mesh(geometry, material);
// mesh에 앞서 만든 geometry와 material을 인자로 넣어서 만든다.


camera.position.z = 5; // 카메라와 Z축 위치를 5로 바꿔준다.
camera.position.y = 2; // 카메라와 y축 위치를 2로 바꿔준다.
scene.add(camera);
scene.add(mesh); //scene에 방금 만든 mesh를 추가한다.
app.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
