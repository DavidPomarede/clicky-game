import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    highScore: 0,
    id: 0,
    clicked: []
  };

  // componentDidMount() {
  //   this.shuffle(this.state.friends);
  // }


  // handleBtnClick = event => {
  //   // Get the data-value of the clicked button
  //   const btnType = event.target.attributes.getNamedItem("data-value").value;
  //   // Clone this.state to the newState object
  //   // We'll modify this object and use it to set our component's state
  //   const newState = { ...this.state };

  //   if (btnType === "pick") {
  //     // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
  //     newState.match = 1 === Math.floor(Math.random() * 5) + 1;

  //     // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
  //     newState.matchCount = newState.match
  //       ? newState.matchCount + 1
  //       : newState.matchCount;
  //   } else {
  //     // If we thumbs down'ed the dog, we haven't matched with it
  //     newState.match = false;
  //   }
  //   // Replace our component's state with newState, load the next dog image
  //   this.setState(newState);
  //   this.loadNextDog();
  // };

    shuffle = (array) => {
      // return array;
    return array.sort( () => Math.random() - 0.5) 
    };

  clickFriend = id => {
    console.log(id);
    let whichClick = id;
    const clicked = [...this.state.clicked];
    clicked.push(whichClick);
    // console.log(clicked);
    // console.log(friends);
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friendsList = [...this.state.friends];
    var shuffledFriends = this.shuffle(friendsList);
    console.log(JSON.stringify(shuffledFriends));
    // Set this.state.friends equal to the new friends array
    this.setState({ 
      clicked: clicked,
      friends: shuffledFriends });
    // console.log(this.state.clicked);
  };




  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            clickFriend={this.clickFriend}
            // name={friend.name}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
