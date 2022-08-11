const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = 600;
const HEIGHT = 600;

canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.width = WIDTH;
canvas.style.height = HEIGHT;

setTimeout(() => {
  setup();
}, 1);
setInterval(() => {
  draw();
}, 1);

function reset() {
  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
