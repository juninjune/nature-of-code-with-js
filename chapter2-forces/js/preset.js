const WIDTH = 600;
const HEIGHT = 600;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = WIDTH;
canvas.height = HEIGHT;
document.body.style.width = WIDTH;
document.body.style.height = HEIGHT;

setTimeout(() => {
  setup();
}, 1);
setInterval(() => {
  draw();
}, 25);

function reset() {
  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
