import * as THREE from "three";

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

const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper);


// move the camera position to see ..
camera.position.set(0,2,5)

//add box in project

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({
    color:0x00FF00
})
const box = new THREE.Mesh(boxGeometry,boxMaterial);
scene.add(box);

//declare function value of rotation update get increased 60 times per second
// every second we are going to ratate the cube by 0.01 radians and x and y axis
function animate (time){
    box.rotation.x=time/1000;
    box.rotation.y=time/1000;
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate)


//

