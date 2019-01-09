// https://natureofcode.com/book/chapter-2-forces/ Example 2.5: Fluid Resistance

import Mover from "../classes/Mover";
import Liquid from "../classes/Liquid";

export default p => {
  let movers = Array(100);
  const MAX_RADIUS = 5;
  let liquid;
  p.setup = () => {
    // p.createCanvas(360, 640);
    p.createCanvas(640, 360);
    for (let i = 0; i < movers.length; i++) {
      movers[i] = new Mover(
        p.random(0.1, MAX_RADIUS),
        p.map(i, 0, movers.length, MAX_RADIUS, p.width - MAX_RADIUS),
        0,
        p
      );
      console.log(i);
      console.log(movers[i]);
    }
    console.log(movers);
    console.log(movers[movers.length - 1]);
    liquid = new Liquid(0, p.height / 2, p.width, p.height / 2, 0.1, p);
    console.log(liquid);
  };

  p.draw = () => {
    p.background(125);
    liquid.display();
    for (let i = 0; i < movers.length; i++) {
      if (movers[i].isInside(liquid)) {
        movers[i].drag(liquid);
      }
      const m = 0.1 * movers[i].mass;
      const gravity = p.createVector(0, m);
      movers[i].applyForce(gravity);
      movers[i].update();
      movers[i].display();
      movers[i].checkEdges();
    }
  };
};
