class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  mult(t) {
    this.x *= t;
    this.y *= t;
  }

  div(d) {
    this.x /= d;
    this.y /= d;
  }
}
