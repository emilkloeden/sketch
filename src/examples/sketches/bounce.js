// https://natureofcode.com/book/chapter-1-vectors/

export default p => {
  const diameter = 30;
  const radius = diameter / 2;
  const CANVAS_WIDTH = 600;
  const CANVAS_HEIGHT = 150;
  const x = 100;
  const y = 100;
  const xSpeed = 1;
  const ySpeed = 3.3;

  p.setup = () => {
    p.location = p.createVector(x, y);
    p.velocity = p.createVector(xSpeed, ySpeed);
    p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    p.background(30);
  };
  p.draw = () => {
    p.background(30);
    p.location.add(p.velocity);
    let { width, height } = p;

    if (p.location.x + radius >= width || p.location.x - radius <= 0) {
      p.velocity.x *= -1;
    }
    if (p.location.y + radius >= height || p.location.y - radius <= 0) {
      p.velocity.y *= -1;
    }
    p.fill(255);
    p.ellipse(p.location.x, p.location.y, diameter);
  };
};
