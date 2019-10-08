import React, { Component } from "react";

class CircleSelector extends Component {
  state = {};

  render() {
    console.log(this.props.selCircleIdx);
    return (
      <div className="CircleSelector">
        {this.props.circles.map((circle, idx) => (
          <button
            key={circle}
            onClick={() => this.props.handleCircleSelection(idx)}
            className={this.props.selCircleIdx === idx ? "selected" : ""}
          >
            Select Circle {circle}
          </button>
        ))}
      </div>
    );
  }
}

export default CircleSelector;
