import React from "react";
// import "./style.css";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6"
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  }
};

function Navbar(props) {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>
      <span >{props.message} ... </span>
      <span >Score: {props.score} </span>
      <span >High Score: {props.highScore} </span>
      </div>
    </div>
  );
}

export default Navbar;