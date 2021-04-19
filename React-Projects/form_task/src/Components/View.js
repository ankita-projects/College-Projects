import React from "react";

const View = (props) => {
  return (
    <div className="view">
      <h1>This is your input:</h1>
      <div className="view-container">
      <p>
        First name:<span> {props.firstname}</span>
      </p>
      <p>
        Last name:<span> {props.lastname}</span>
      </p>
      <p>
        Phone number: <span>{props.phonenumber}</span>
      </p>
      <p>
        Role:<span> {props.role} </span>
      </p>
      <p>
        Message:<span> {props.message}</span>
      </p>
    </div>
    </div>
  );
};

export default View;
