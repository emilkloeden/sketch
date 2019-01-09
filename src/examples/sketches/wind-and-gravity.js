// https://natureofcode.com/book/chapter-2-forces/
import Mover from "../classes/Mover";

export default p => {
  let movers = [];
  let wind, gravity;
  p.setup = () => {
    for (let i = 0; i < 100; i++) {
      movers[i] = new Mover(p.random(0.1, 5), 0, 0, p);
    }
    p.createCanvas(400, 400);
    p.background(130);
  };
  p.draw = () => {
    p.background(255);
    wind = p.createVector(0.01, 0);
    gravity = p.createVector(0, 0.1);
    for (let m of movers) {
      m.applyForce(wind);
      m.applyForce(gravity);
      m.update();
      m.display();
      m.checkEdges();
    }
  };
};
