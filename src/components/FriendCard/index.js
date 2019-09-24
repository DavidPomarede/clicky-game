import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="container">
        <div className="image">
          <img class="img-responsive" alt={props.name} src={props.image} onClick={() => props.clickFriend(props.id)}/>
        </div>
      </div>
      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div> */}
      {/* <span onClick={() => props.clickFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default FriendCard;
