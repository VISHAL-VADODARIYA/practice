import { useState } from "react";

function MyButton() {
  let demo = 20;
  {
    demo == 20
      ? console.log("20")
      : demo > 20
      ? console.log("greater than 20")
      : console.log("less than 20");
  }
  return <div>{demo}</div>;
}

function dum() {
  return (
    <div>
      <MyButton />
    </div>
  );
}

export default dum;
