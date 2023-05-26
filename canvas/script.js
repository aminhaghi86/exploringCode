var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//resizing
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// how to create a rectange
// ctx.fillRect(100, 100, 100, 100);

// /at first we need to set a color and after that it create a shape.
// ctx.strokeStyle='red'
// ctx.strokeRect(300,300,100,100)

//create custom line

// ctx.beginPath();
// ctx.moveTo(400, 300);
// //x,y axis
// ctx.lineTo(200, 100);
// ctx.stroke();

///
// Create a button element
// const button = document.createElement("button");

// // Set the button text to 'Can you click me?'
// button.innerText = "Can you click me?";

// document.body.append(button);

//
// load image in Canvas

const img = new Image(); // Create new img element
img.src = "./dragon.jpg";
img.onload = () => {
  ctx.drawImage(img, 0, 0, 200, 200); // Draw the image at (0, 0) coordinates
};
////

// Add text in canvas
ctx.font = "30px Arial";
ctx.fillText("you can paint in canvas", 300, 50);

//

var drawing = false;

function startPosition(e) {
  drawing = true;
  draw(e);
}
function finishedPosition() {
  drawing = false;
  ctx.beginPath();
}
function draw(e) {
  if (!drawing) return;
  ctx.lineWidth = 20;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}

window.addEventListener("mousedown", startPosition);
window.addEventListener("mouseup", finishedPosition);
window.addEventListener("mousemove", draw);

// button.onclick = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// };
