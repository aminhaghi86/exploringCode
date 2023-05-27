import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
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
const boxMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);



//create plane! pass width and height of plane as a argument to it
const planeGeometry = new THREE.PlaneGeometry(30, 30);
// create material and merge it with geometry into mesh!
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
//make a plane to match with grid , we need to rotate it
plane.rotation.x = -0.5 * Math.PI;

//add grid helper
const gridHelper = new THREE.GridHelper(30)
scene.add(gridHelper)


//

//then we add it to the scene
//declare function value of rotation update get increased 60 times per second
// every second we are going to ratate the cube by 0.01 radians and x and y axis
function animate(time) {
  box.rotation.x = time / 1000;
  box.rotation.y = time / 1000;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

//
