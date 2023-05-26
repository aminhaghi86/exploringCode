import * as dat from "dat.gui";
const gui = new dat.GUI();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//
const wave = {
  y: canvas.height / 2,
  length: 0.01,
  amplitude: 100,
  frequency: 0.01,
};

gui.add(wave, "y", 0, canvas.height);
gui.add(wave, "length", -0.01, 0.01);
gui.add(wave, "amplitude", -300, 300);
gui.add(wave, "amplitude", -300, 300);
gui.add(wave, "frequency", -0.01, 1);
//

//declare function to recall itself over and over again
let increament = wave.frequency;
function animate() {
  requestAnimationFrame(animate);
  ctx.beginPath();

  ctx.moveTo(0, canvas.height / 2);

  for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(
      i,
      wave.y + Math.sin(i * wave.length + increament) * wave.amplitude
    );
  }
  increament += wave.frequency;
  ctx.stroke();
}
animate();
