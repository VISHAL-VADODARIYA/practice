import React, { useState } from "react";

export default function Input() {
  const [data, setData] = useState();
  const showData = (e) => {
    e.preventDefault();
    setData(e.target[0].value,e.target[1].value,e.target[2].value);
    console.log(data);
  };

  return (
    <form onSubmit={showData}>
      <label>FirstName:</label>
      <input type="text" id="fn" />
      <br />
      <label>MiddleName:</label>
      <input type="text" id="mn" />
      <br />
      <label>LastName:</label>
      <input type="text" id="ln" />
      <br />
      <button>Submit</button>
    </form>
  );
}