const p5 = require("p5");
const sketch = p => {
  p.x = 100;
  p.y = 100;
  p.angle1 = 0.0;
  p.segLength = 50;

  p.setup = () => {
    p.createCanvas(600, 400);
    p.strokeWeight(20.0);
    p.stroke(255, 100);
  };

  p.draw = () => {
    const a = p.createVector(100, 100, -10, -10);

    p.background(0);
    p.dx = p.mouseX - p.x;
    p.dy = p.mousey - p.y;
    p.angle1 = p.atan2(p.dy, p.dx);

    p.segment(p.x, p.y, p.angle1);
    p.ellipse(p.x, p.y, 20, 20);
  };

  p.segment = (x, y, a) => {
    p.push();
    p.translate(x, y);
    p.rotate(a);
    p.line(0, 0, p.segLength, 0);
    p.pop();
  };
};

export default sketch;
