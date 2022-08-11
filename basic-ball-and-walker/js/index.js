class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  walk() {
    if (Math.random() < 0.5) {
      this.x--;
    } else {
      this.x++;
    }
    if (Math.random() < 0.5) {
      this.y--;
    } else {
      this.y++;
    }
  }

  paint(ctx) {
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, 3, 3);
  }
}

class Ball {
  constructor(x, y, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.speedY = -this.speedY;
    }
  }

  paint() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    ctx.fill();
  }
}

const ball = new Ball(canvas.width / 2, canvas.height / 2, 2, 4);

function setup() {}

function draw() {
  ball.move();
  ball.paint();
}
