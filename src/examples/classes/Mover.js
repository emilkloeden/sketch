import p5 from "p5";

class Mover {
  constructor(mass, x, y, p) {
    this.p = p;
    const { createVector } = this.p;
    this.location = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = mass;
    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0.01;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    this.aAcceleration = this.acceleration.x / 10;
    this.aVelocity += this.aAcceleration;

    this.aVelocity = this.p.constrain(this.aVelocity, -0.1, 0.1);
    this.angle += this.aVelocity;
    this.acceleration.mult(0);
  }

  display() {
    this.p.stroke(0);
    this.p.fill(175);
    this.p.ellipse(
      this.location.x,
      this.location.y,
      this.mass * 16,
      this.mass * 16
    );
  }

  checkEdges() {
    if (this.location.x > this.p.width) {
      this.location.x = this.p.width;
      this.velocity.x *= -1;
    } else if (this.location.x < 0) {
      this.location.x = 0;
      this.velocity.x *= -1;
    }
    if (this.location.y > this.p.height) {
      this.location.y = this.p.height;
      this.velocity.y *= -1;
    } else if (this.location.y < 0) {
      this.location.y = 0;
      this.velocity.y *= -1;
    }
  }

  isInside(l) {
    const { x, y } = this.location;
    return x > l.x && x < l.x + l.w && y > l.y && y < l.y + l.h;
  }

  drag(l) {
    const speed = this.velocity.mag();
    const dragMagnitude = l.c * speed * speed;

    const drag = this.velocity.copy();
    drag.mult(-1);
    drag.normalize();

    drag.mult(dragMagnitude);

    this.applyForce(drag);
  }
}

export default Mover;
