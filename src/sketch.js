import React, { Component } from "react";
import p5 from "p5";

class Sketch extends Component {
  constructor() {
    super();
    this.renderRef = new React.createRef();
  }

  componentDidMount() {
    this.sketch = new p5(p => {
      p.setup = () => {
        p.createCanvas(this.props.width, this.props.height).parent(
          this.renderRef.current
        );
      };

      p.draw = () => {
        p.background(0);
        p.fill(255);
        p.rect(this.props.x, this.props.y, 50, 50);
      };
    });
  }

  componentWillUnmount() {
    this.sketch = null;
  }

  render() {
    return (
      <div className="GameBox">
        <div ref={this.renderRef} />
        <input defaultValue={this.props.x} />
        <input defaultValue={this.props.y} />
      </div>
    );
  }
}

export default Sketch;
