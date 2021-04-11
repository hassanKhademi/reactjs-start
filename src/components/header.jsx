import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div style={{ height: "50px", width: "100%" }} className="bg-warning">
        <p className="text-white ">
          counter:
          <span className="m-2 badge badge-success">{this.props.allCount}</span>
        </p>
      </div>
    );
  }
}
