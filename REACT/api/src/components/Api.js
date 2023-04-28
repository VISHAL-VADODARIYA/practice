import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Api() {
  const [data, setData] = useState();

  const GetPostsData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data1) => setData(data1))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={GetPostsData}>click me to show data</button>
      {data ? (
        <table>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
          {data.data.map((i) => {
            return (
              <tr>
                <td>{i.userId}</td>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>{i.body}</td>
              </tr>
            );
          })}
        </table>
      ) : (
        <></>
      )}
    </div>
  );
}
