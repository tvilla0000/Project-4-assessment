import React, { Component } from "react";

class Circles extends Component {
  state = {};
  render() {
    return (
      <div className="Circles">
        {this.props.circles.map((circle, idx) => (
          <div
            key={circle}
            className={this.props.selCircleIdx === idx ? "selected" : ""}
          >
            {circle}
          </div>
        ))}
      </div>
    );
  }
}

export default Circles;
