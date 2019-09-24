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
    clicked: [],
    match: false,
    message: "Click on any character to begin"
  };


    shuffle = (array) => {
      // return array;
    return array.sort( () => Math.random() - 0.5) 
    };

  clickFriend = (id, score, match) => {

    for (var i = 0; i < this.state.clicked.length; i++) {
      if (this.state.clicked[i] === id) {
        match = true;
        console.log("there's a match!");
        // console.log(this.state.match);
      } else {
        match = false;
      }
    }




    if (this.state.match || match) {
      // const zero = 0;
      if (this.state.score > this.state.highScore) {
        this.setState({ 
          highScore: this.state.score,
          score: 0,
          match: false,
          message: "you lost! try again"
        });
        // this.setState({ highScore: this.state.score });
        // console.log("high score!")
        // this.state.highScore = this.state.score;
      } else {
        this.setState({ 

          score: 0,
          match: false,
          message: "you lost! try again"
        });
      }



    } else {
      // const plusOne = this.state.score++;
      // this.setState({ score: this.state.score + 1 });
      // console.log(plusOne);

      // console.log(id);
      // console.log(this.state.clicked);
      // console.log("score: " + this.state.score);
      let whichClick = id;
      const clicked = [...this.state.clicked];
      clicked.push(whichClick);
      const friendsList = [...this.state.friends];
      var shuffledFriends = this.shuffle(friendsList);
      // console.log(JSON.stringify(shuffledFriends));
      this.setState({ 
        score: this.state.score +1,
        clicked: clicked,
        friends: shuffledFriends, 
        match: match,
        message: "you got 1 point"
      });

    }





  };




  // Map over this.state.friends and render a FriendCard component for each friend object
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
