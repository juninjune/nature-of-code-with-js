const mover = new Array(10);
const repulseStrenght = 0.7;

function setup() {
  for (let i = 0; i < mover.length; i++) {
    const newMover = new Mover(
      100 + Math.random() * (WIDTH - 200),
      100 + Math.random() * (HEIGHT - 200),
      Math.random() * 2 + 8,
      0.5,
      i
    );
    mover[i] = newMover;
  }
}

function draw() {
  const wind = new Vector2(0.1, 0);
  const gravity = new Vector2(0, 1);

  reset();
  for (let i = 0; i < mover.length; i++) {
    const repulse = new Vector2();
    const xPos = mover[i].location.x;
    const yPos = mover[i].location.y;

    const distanceX = xPos < WIDTH / 2 ? xPos : xPos - WIDTH;
    if (distanceX === 0) {
    } else {
      repulse.x =
        (Math.abs(distanceX - WIDTH / 2) * repulseStrenght) / distanceX;
    }
    const distanceY = yPos < WIDTH / 2 ? yPos : yPos - WIDTH;
    if (distanceY === 0) {
    } else {
      repulse.y =
        (Math.abs(distanceY - HEIGHT / 2) * repulseStrenght) / distanceY;
    }

    mover[i].addForce(repulse);
    mover[i].addForce(wind);
    mover[i].addForce(gravity);
    mover[i].update(ctx);
    mover[i].display(ctx);
  }
}
