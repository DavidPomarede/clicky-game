import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import friends from "./friends.json";

class App extends Component {

  state = {
    friends: friends,
    score: 0,
    highScore: 0,
    id: 0,
    clicked: [],
    match: false,
    message: "Don't click on the same character twice! Click on any character to begin"
  };


  shuffle = (array) => {
    return array.sort( () => Math.random() - 0.5) 
  };

  clickFriend = (id, score, match) => {

    for (var i = 0; i < this.state.clicked.length; i++) {
      if (this.state.clicked[i] === id) {
        match = true;
        console.log("there's a match!");
      } else {
        match = false;
      }
    }




    if (this.state.match || match) {

      if (this.state.score > this.state.highScore) {
        this.setState({ 
          highScore: this.state.score,
          score: 0,
          match: false,
          message: "You lost! try again"
        });

      } else {
        this.setState({ 

          score: 0,
          match: false,
          message: "You lost! try again"
        });
      }



    } else {

      while (this.state.score > 11) {
      let whichClick = id;
      const clicked = [...this.state.clicked];
      clicked.push(whichClick);
      const friendsList = [...this.state.friends];
      // const shuffledFriends = this.shuffle(friendsList);

      this.setState({ 
        score: 0,
        clicked: clicked,
        friends: friendsList, 
        match: match,
        highScore: 12,
        message: "You Won!"
      });
        return
      } 

      let whichClick = id;
      const clicked = [...this.state.clicked];
      clicked.push(whichClick);
      const friendsList = [...this.state.friends];
      var shuffledFriends = this.shuffle(friendsList);

      this.setState({ 
        score: this.state.score +1,
        clicked: clicked,
        friends: shuffledFriends, 
        match: false,
        message: "You got 1 point!"
      });     
    }
  };


  render() {
    return (
      <Wrapper>
        <Title>
          Clicky Game!        
          <Navbar 
            message={this.state.message}
            score={this.state.score}
            highScore={this.state.highScore}
          />
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            clickFriend={this.clickFriend}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
