import React from "react";

export default function Dropdown(props) {
  return (
    <>
      <option id={props.number} value={props.name}>
        {props.name}
      </option>
      
    </>
  );
}
