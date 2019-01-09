// https://natureofcode.com/book/chapter-2-forces/

import p5 from "p5";

export default class Attractor {
  constructor(p) {
    this.p = p;
    this.location = p.createVector(p.width / 2, p.height / 2);
    this.mass = 20;
    this.G = 0.4;
  }

  display() {
    const { mass, location } = this;
    const { x, y } = location;
    this.p.stroke(0);
    this.p.fill(175, 200);
    this.p.ellipse(x, y, mass * 2, mass * 2);
  }

  attract(m) {
    const force = p5.Vector.sub(this.location, m.location);
    let distance = force.mag();
    distance = this.p.constrain(distance, 5, 25);

    force.normalize();

    const strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }
}
