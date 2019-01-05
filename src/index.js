import React, { Component } from "react";
import ReactDOM from "react-dom";
import Sketch from "./Sketch";
import follow1 from "./follow1";

const App = () => (
  <div className="App">
    <Sketch>{follow1}</Sketch>
    <Sketch>{follow1}</Sketch>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
