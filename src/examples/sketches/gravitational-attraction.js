// https://natureofcode.com/book/chapter-2-forces/

import Mover from "../classes/Mover";
import Attractor from "../classes/Attractor";

export default p => {
  let m, a;
  p.setup = () => {
    p.createCanvas(640, 360);
    m = new Mover(0.5, p.random(p.width), p.random(p.height), p);
    a = new Attractor(p);
  };
  p.draw = () => {
    p.background(255);
    const f = a.attract(m);
    m.applyForce(f);
    m.update();
    a.display();
    m.display();
  };
};
