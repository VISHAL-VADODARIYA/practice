import React from "react";

export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}
        className={props.class + " px-5 py-1.5 text-center border rounded-xl"}
      >
        {props.text}
      </button>
    </div>
  );
}
