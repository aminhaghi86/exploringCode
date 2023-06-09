import * as dat from "dat.gui";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gui = new dat.GUI();

const wave = {
  y: canvas.height / 2,
  length: 0.01,
  amplitude: 100,
  frequency: 0.01,
  phase:0
};

const strokeColor = {
  h: 200,
  s: 50,
  l: 50,
};

const background = {
  r: 0,
  g: 0,
  b: 0,
  a: 0.01,
};

const waveFolder = gui.addFolder("wave");
waveFolder.add(wave, "y", 0, canvas.height);
waveFolder.add(wave, "length", -0.01, 0.01);
waveFolder.add(wave, "amplitude", -300, 300);
waveFolder.add(wave, "frequency", -0.01, 1);
waveFolder.add(wave, "phase", -0.01, 1);
waveFolder.open();
const strokeColorFolder = gui.addFolder("stroke color");
strokeColorFolder.add(strokeColor, "h", 0, 255);
strokeColorFolder.add(strokeColor, "s", 0, 100);
strokeColorFolder.add(strokeColor, "l", 0, 100);
strokeColorFolder.close();
const backgroundFolder = gui.addFolder("background color");
backgroundFolder.add(background, "r", 0, 255);
backgroundFolder.add(background, "g", 0, 255);
backgroundFolder.add(background, "b", 0, 255);
backgroundFolder.add(background, "a", 0, 1.0);
backgroundFolder.close();

//add animated text 
const text = {
  message: "",
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 48,
  color: "#ffffff"
};

const textFolder = gui.addFolder("text");
textFolder.add(text, "message");
textFolder.add(text, "x", 0, canvas.width);
textFolder.add(text, "y", 0, canvas.height);
textFolder.add(text, "size", 12, 72);
textFolder.addColor(text, "color");
textFolder.open();
//

let increment = wave.frequency;
function animate() {
  requestAnimationFrame(animate);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = `rgba(${background.r},${background.g},${background.b},${background.a})`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(
      i,
      wave.y +
        Math.sin(i * wave.length + increment) *
          wave.amplitude *
          Math.sin(increment)
    );
  }

  ctx.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))}, ${
    strokeColor.s
  }%, ${strokeColor.l}%)`;
  increment += wave.frequency *wave.phase;
  wave.phase+=0.01
  //config text
  ctx.fillStyle = text.color;
  ctx.font = `${text.size}px Arial`;
  ctx.fillText(text.message, text.x, text.y);
  //
  ctx.stroke();
}

animate();
