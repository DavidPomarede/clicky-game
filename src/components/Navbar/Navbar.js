import React, { Component } from "react";
import "./style.css";

class Form extends Component {

  state = {
    score: 0,
    highScore: 0
  };

  render() {

    return (
      return (
        <div style={styles.card}>
          <div value={this.score}></div>
          <div value={this.highScore}></div>
        </div>
      );

    );
  }
}

export default Navbar;
