import React, { Component } from "react";
import "./header.css";
import Logo from "./Logo/logo";
import AddVideoButton from "./AddVideoButton/addVideoButton";
import SearchBar from "../SearchBar/searchBar";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header-container">
        <Logo />
        <span className="spacer" />
        <SearchBar />
        <span className="spacer" />
        <AddVideoButton videoButtonClicked={this.props.onAddVideoClicked} />
      </div>
    );
  }
}

export default Header;
