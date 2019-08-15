import React, { Component } from "react";
import "./logo.css";

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <i class="chess rook icon" />
        <span>Grand Master</span>
        <i class="chess rook icon" />
      </div>
    );
  }
}

export default Logo;
