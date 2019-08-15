import React, { Component } from "react";
import "./backDrop.css";

class BackDrop extends Component {
  render() {
    return <div className="backDrop" onClick={this.props.onBackDropClicked} />;
  }
}

export default BackDrop;
