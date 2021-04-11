import React, { Component } from "react";

class Counter extends Component {
  render() {
    let colorBadge = this.props.counter > 0 ? "badge-warning" : "badge-danger";
    return (
      <div>
        <span className={"badge m-2 " + colorBadge}>{this.props.counter}</span>
        <button
          className="btn btn-sm btn-primary"
          onClick={this.props.onIncreaseCounter}
        >
          +
        </button>

        <button
          disabled={this.props.counter == 0 ? "disabled" : null}
          onClick={this.props.onDecreamentCounter}
          className="ml-1 btn btn-sm btn-warning"
        >
          -
        </button>

        <button
          onClick={this.props.onDeleteCounter}
          className="ml-1 btn btn-sm btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
