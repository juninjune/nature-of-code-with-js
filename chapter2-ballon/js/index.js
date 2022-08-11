class Ballon {
  constructor(posX, posY, mass) {
    this.location = new Vector2(posX, posY);
    this.velocity = new Vector2();
    this.acceleration = new Vector2();
    this.force = new Vector2();

    this.airFriction = 0.0001;
    this.repulsiveForce = 0.5;
  }

  addForce(force) {
    this.acceleration.add(force);
    this.accelerate();
  }

  accelerate() {
    this.velocity.add(this.acceleration);
    this.move();
  }

  move() {
    this.location.add(this.velocity);

    if (this.location.x < 0 || this.location.x > canvas.width) {
      this.location.x = this.location.x < 0 ? 0 : canvas.width;
      this.velocity.x = -this.repulsiveForce * this.velocity.x;
    }
    if (this.location.y < 0 || this.location.y > canvas.height) {
      this.location.y = this.location.y < 0 ? 0 : canvas.height;
      this.velocity.y = -this.repulsiveForce * this.velocity.y;
    }
  }

  display(ctx) {
    ctx.beginPath();
    ctx.arc(this.location.x, this.location.y, 30, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

const ballon = new Ballon(canvas.width / 2, canvas.height);

function setup() {}

function draw() {
  reset();
  ballon.display(ctx);
  ballon.addForce(new Vector2(0, -0.0005));
  ballon.addForce(
    new Vector2(
      -ballon.airFriction * ballon.velocity.x,
      -ballon.airFriction * ballon.velocity.y
    )
  );
  ballon.display(ctx);
}
