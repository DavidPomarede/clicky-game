import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="container" style={props.style}>
        <div className="image" style={props.style}>
          <img className="img-responsive" alt={props.name} src={props.image} onClick={() => props.clickFriend(props.id)}/>
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
