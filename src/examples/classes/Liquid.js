export default class Liquid {
  constructor(x, y, w, h, c, p) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.p = p;
  }

  display() {
    const { x, y, w, h, p } = this;
    p.noStroke();
    p.fill(175);
    p.rect(x, y, w, h);
  }
}
