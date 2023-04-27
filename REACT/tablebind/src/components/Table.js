import React from "react";
import data from "./data.json";

export default function Table() {
  let Amounts = 0;
  return (
    <div>
      
      <table border="1" className="w-full">
        <tr>
          <th>ITEM</th>
          <th colSpan="2">DESCRIPTION</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
          <th>TAX</th>
          <th>AMOUNT</th>
        </tr>
        {data[0].ItemDetails.map((i) => {
          Amounts += parseInt(i.Amount.slice(1));
          return (
            <tr>
              <td>{i.ItemName}</td>
              <td colSpan="2">{i.Description}</td>
              <td>{i.Quntity}</td>
              <td>${parseInt(i.Price.slice(1)).toFixed(2)}</td>
              <td>{i.Tax}</td>
              <td>{i.Amount}</td>
            </tr>
          );
        })}
      </table>
      <div>{Amounts}</div>
    </div>
  );
}
