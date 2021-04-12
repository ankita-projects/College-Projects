import React from "react";

const Circle = (props) => {
  let classList = `circle  ${props.active ? props.angrybird : " "}  ${
    props.active ? "" : "inactive"
  }`;
  console.log(classList);
  return (
    <div
      onClick={props.click}
      className={classList}
      value={props.id}
      disabled={props.disabled}
    ></div>
  );
};

export default Circle;
