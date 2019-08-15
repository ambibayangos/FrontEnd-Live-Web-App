import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <nav className="ui right aligned category search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search a player ..."
            style={{ width: "300px" }}
          />
          <i className="search icon" />
        </div>
        <div className="results" />
      </nav>
    );
  }
}

export default SearchBar;
