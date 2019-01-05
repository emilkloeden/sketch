import React, { Component } from "react";
import ReactDOM from "react-dom";
import Wrapper from "./wrapper";
import GameBox from "./GameBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      x: 100,
      y: -50,
      w: 200,
      h: 400
    };
    // this.fn = this.fn.bind(this);
  }

  componentDidMount() {
    this.myInterval = setInterval(
      () =>
        this.setState({
          y: this.state.y + 1 > this.state.h + 50 ? -50 : this.state.y + 1
        }),
      10
    );
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    // console.log(this.renderRef.current);
    const { w, h, x, y } = this.state;
    return (
      <div className="App">
        <Wrapper>{GameBox}</Wrapper>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
