class Mover {
  constructor(posX, posY, mass = 10, repulsiveForce = 0.8, index) {
    this.location = new Vector2(posX, posY);
    this.velocity = new Vector2();
    this.acceleration = new Vector2();
    this.mass = mass;
    this.repulsiveForce = repulsiveForce;
    this.index = index;
  }

  addForce(force) {
    this.acceleration.x += force.x / this.mass;
    this.acceleration.y += force.y / this.mass;
  }

  #accelerate() {
    this.velocity.add(this.acceleration);
    this.#move();
  }

  #move() {
    this.location.add(this.velocity);
    this.#checkEdge();
  }

  #checkEdge() {
    if (
      this.location.x < this.mass ||
      this.location.x > canvas.width - this.mass
    ) {
      this.location.x =
        this.location.x < this.mass ? this.mass : canvas.width - this.mass;
      this.velocity.x = -this.repulsiveForce * this.velocity.x;
    }
    if (
      this.location.y < this.mass ||
      this.location.y > canvas.height - this.mass
    ) {
      this.location.y =
        this.location.y < this.mass ? this.mass : canvas.height - this.mass;
      this.velocity.y = -this.repulsiveForce * this.velocity.y;
    }
  }

  #drawForce(ctx) {
    ctx.beginPath();
    ctx.save();
    ctx.moveTo(this.location.x, this.location.y);
    ctx.lineTo(
      this.location.x + this.acceleration.x * 500,
      this.location.y + this.acceleration.y * 500
    );
    ctx.stroke();
    ctx.restore();
  }

  update(ctx) {
    this.#accelerate();
    this.#move();
    this.#checkEdge();
    this.#drawForce(ctx);
    this.acceleration = new Vector2();
  }

  display(ctx) {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(this.location.x, this.location.y, this.mass, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "white";
    ctx.fillText(this.index, this.location.x, this.location.y);
  }
}
