import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector";
import Circles from "./components/Circles";

const circles = ["1", "2", "3", "4"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selCircleIdx: 0
    };
  }

  handleCircleSelection = circleIdx => {
    this.setState({ selCircleIdx: circleIdx });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            selCircleIdx={this.state.selCircleIdx}
            handleCircleSelection={this.handleCircleSelection}
            handleClick={this.handleClick}
            circles={circles}
          />
          <Circles selCircleIdx={this.state.selCircleIdx} circles={circles} />
        </main>
      </div>
    );
  }
}

export default App;
