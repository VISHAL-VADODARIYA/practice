import React from "react";

export default function List({ dt }) {
  return (
    <>
      {dt.map((i) => {
        return (
          <ul>
            <li>{i.Name}</li>
            <List dt={i.children} />
          </ul>
        );
      })}
    </>
  );
}
