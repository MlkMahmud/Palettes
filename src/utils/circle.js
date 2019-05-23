class Circle {
  constructor(ctx, x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    this.ctx.fillStyle = this.color;
    this.ctx.strokeStyle = this.color;
    this.ctx.fill();
    this.ctx.stroke();
  }

  update() {
    if (this.x + this.radius >= window.innerWidth || this.x <= this.radius) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius >= window.innerHeight || this.y <= this.radius) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

export default Circle;
