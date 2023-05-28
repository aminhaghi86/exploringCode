import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as dat from "dat.gui";
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// move the camera position to see ..
camera.position.set(-10, 30, 30);

//call update method  every time we change position of camera!
orbit.update();

//add box in project

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

//create plane! pass width and height of plane as a argument to it
const planeGeometry = new THREE.PlaneGeometry(30, 30);
// create material and merge it with geometry into mesh!
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
//make a plane to match with grid , we need to rotate it
plane.rotation.x = -0.5 * Math.PI;

//add grid helper
const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);
//then we add it to the scene

//DECLARE ANOTHER SHAPE
const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);

const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0x0000ff,
  wireframe: false,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

sphere.position.set(-10, 10, 0);
//declare function value of rotation update get increased 60 times per second

//add ambientLight -we create insteanse of ambient light class pass the color of the light as an argument

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// meshbasicmaterial does not affect by light! so we change it ..

// after that we need to add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight);
directionalLight.position.set(-30,50,0)
// add helper to light
const dLightHelper = new THREE.DirectionalLightHelper(directionalLight,5);
scene.add(dLightHelper);
// dat gui
const gui = new dat.GUI();

const options = {
  sphereColor: "#ffea00",
  wireframe: false,
  speed: 0.01,
};

gui.addColor(options, "sphereColor").onChange(function (e) {
  sphere.material.color.set(e);
});
gui.add(options, "wireframe").onChange(function (e) {
  sphere.material.wireframe = e;
});

let step = 0;
// let speed=0.01;remove the speed and add it to property of options

gui.add(options, "speed", 0, 0.2);

// every second we are going to ratate the cube by 0.01 radians and x and y axis
function animate(time) {
  box.rotation.x = time / 1000;
  box.rotation.y = time / 1000;

  //
  step += options.speed;
  sphere.position.y = 10 * Math.abs(Math.sin(step));

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

//
