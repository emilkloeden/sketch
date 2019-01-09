import React from "react";
import ReactDOM from "react-dom";
import Sketch from "./SketchHooks";

import {
  Bounce,
  Follow1,
  FluidResistance,
  GravitationalAttraction
} from "./examples";

const App = () => (
  <div className="App">
    <h1>Examples</h1>
    <h2>Fluid Resistance</h2>
    <p>
      From:{" "}
      <a href="https://natureofcode.com/book/chapter-2-forces/">
        https://natureofcode.com/book/chapter-2-forces/ Example 2.5: Fluid
        Resistance
      </a>
    </p>
    <Sketch>{FluidResistance}</Sketch>

    <h2>Gravitational Attraction</h2>
    <p>
      From:{" "}
      <a href="https://natureofcode.com/book/chapter-2-forces/">
        https://natureofcode.com/book/chapter-2-forces/
      </a>
    </p>
    <Sketch>{GravitationalAttraction}</Sketch>
    <h2>Bouncing Ball</h2>
    <p>
      From:{" "}
      <a href="https://natureofcode.com/book/chapter-1-vectors/">
        https://natureofcode.com/book/chapter-1-vectors/
      </a>
    </p>
    <Sketch>{Bounce}</Sketch>
    <h2>Follow 1</h2>
    <p>
      From{" "}
      <a href="http://p5js.org/examples/interaction-follow-1.html">
        http://p5js.org/examples/interaction-follow-1.html
      </a>
    </p>
    <Sketch>{Follow1}</Sketch>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
