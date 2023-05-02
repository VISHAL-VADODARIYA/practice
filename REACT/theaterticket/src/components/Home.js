import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data1, setData] = useState();
  const [ticket, setTicket] = useState(0);
  const [a3, setA3] = useState(300);
  const [amount, setAmount] = useState(0);
  const [color, setColor] = useState({ 0: "bg-white" });
  useEffect(() => {
    axios
      .get("movies.json")
      .then((data) => setData(data.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data1?.Rows);

  const demo = (v) => {
    var i = 0,
      k = 0,
      j = 0;

    const tempData = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    // console.log(tempData);
    for (i = data1?.Rows[v].Start; i <= data1?.Rows[v].End; i++) {
      tempData[0][j] = i;
      if (tempData[0][j] === data1?.Rows[v].AlreadyBooked[k]) {
        tempData[1][j] = data1?.Rows[v].AlreadyBooked[k];
        k++;
      }
      j++;
    }

    console.log(tempData);
    return tempData;
  };

  function onClick(e) {
    if (+e.target.id !== 0) {
      setColor((p) => {
        return { ...p, [+e.target.id]: "bg-green-500" };
      });
      setTicket((p) => p + 1);
      if (ticket > 1) {
        setA3(a3 + 50);
      }
      setAmount(amount + a3);
    }
  }
  let tempData;
  return (
    <div>
      {data1?.Rows.map((data, i) => {
        {
          tempData = demo(i);
        }
        return (
          <div className="flex">
            {tempData[0].map((v, i) => {
              return (
                <div className="flex">
                  <div
                    id={tempData[1][i] === 0 ? v : 0}
                    onClick={onClick}
                    className={
                      "flex w-10 p-2 border border-1 border-black " +
                      (tempData[1][i] === 0 ? " bg-white " : " bg-gray-500 ") +
                      (color[v] || " ")
                    }
                  >
                    {v === 0 ? " " : v}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      <div className="grid align-left">
        <div>Movies name : {data1?.MovieName}</div>
        <div>BookedTicket : {ticket}</div>
        <div>Amount : {amount}</div>
        <div>Tax : {amount * 0.2} (20% of the movie price)</div>
        <div>TotalAmount : {amount * 1.2} Rs.</div>
      </div>
    </div>
  );
}
