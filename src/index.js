import React from "react";
import ReactDOM from "react-dom";
import Sketch from "./SketchHooks";
import follow1 from "./examples/follow1";
import gameOfLife from "./examples/gameOfLife";

const App = () => (
  <div className="App">
    <Sketch>{gameOfLife}</Sketch>
    <Sketch>{follow1}</Sketch>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
