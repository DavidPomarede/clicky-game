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
    padding: "0 20px"
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



// import React, { Component } from "react";
// // import "./style.css";

// class Navbar extends Component {
//   // Setting the component's initial state
//   state = {
//     score: 0,
//     highScore: 0
//   };

  // handleInputChange = event => {
  //   // Getting the value and name of the input which triggered the change
  //   const { name, value } = event.target;

  //   // Updating the input's state
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();

  //   // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
  //   alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
  //   this.setState({
  //     firstName: "",
  //     lastName: ""
  //   });
  // };

//   render(props) {
//     // Notice how each input has a `value`, `name`, and `onChange` prop
//     // return (
//       return (
//         <div >
//           <div value={this.props.score}></div>
//           <div value={this.props.highScore}></div>
//         </div>
//       );
//       // <div>
//       //   <p>
//       //     Hello {this.state.firstName} {this.state.lastName}
//       //   </p>
//       //   <form className="form">
//       //     <input
//       //       value={this.state.firstName}
//       //       name="firstName"
//       //       onChange={this.handleInputChange}
//       //       type="text"
//       //       placeholder="First Name"
//       //     />
//       //     <input
//       //       value={this.state.lastName}
//       //       name="lastName"
//       //       onChange={this.handleInputChange}
//       //       type="text"
//       //       placeholder="Last Name"
//       //     />
//       //     <button onClick={this.handleFormSubmit}>Submit</button>
//       //   </form>
//       // </div>
//     // );
//   }
// }

// export default Navbar;