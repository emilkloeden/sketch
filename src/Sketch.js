import React, { Component } from "react";
import p5 from "p5";

class Sketch extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.sketch = new p5(this.props.children, this.ref.current);
  }
  render() {
    return <div ref={this.ref} />;
  }
}

export default Sketch;
