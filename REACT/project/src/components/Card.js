import React, { useState } from "react";
import Button from "./Button";

export default function Card(props) {
  const [tog, setTog] = useState(false);
  const toggle = () => {
    setTog(!tog);
  };
  function addCart() {
    props.setCartData((p) => {
      console.log(p);
      return {
        ...p,
        [props.id]: {
          [props.image]: props.image,
          [props.title]: props.title,
          [props.description]: props.description,
          [props.price]: props.price,
          [props.rate]: props.rate,
          [props.count]: props.count,
        },
      };
    });
  }
  return (
    <div class="max-w-sm bg-white rounded-lg shadow grid content-between p-5">
      <div>
        <div className="flex justify-center p-3">
          <a href="#">
            <img
              class="rounded-t-lg  object-contain overflow-hidden border border-1 w-48 h-48 bg-white"
              src={props.image}
              alt={props.image + "Image"}
            />
          </a>
        </div>

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {props.title}
        </h5>
        <p class="mb-3 font-normal text-white">
          <button onClick={toggle} className="text-gray-700">
            Description {tog ? "▲" : "▼"}
          </button>

          {tog && (
            <div
              className={
                "border border-1 rounded  transition ease-in-out delay-1000  shadow-md shadow-gray-700 text-gray-700 p-3"
              }
            >
              {props.description}
            </div>
          )}
        </p>
        <h5 class="mb-3 font-bold text-gray-700">Price : {props.price} ₹</h5>
        <p class="mb-3 font-normal text-gray-700">
          Rating : {props.rate}★ <br />
          Rating by {props.count} People
        </p>
      </div>
      <div className="flex justify-around mt-full">
        <Button
          class="bg-green-700 text-white hover:bg-green-800"
          text="Buy"
          id={props.id}
        />
        <Button
          class="bg-blue-700 text-white hover:bg-blue-800"
          text="Add To Cart"
          id={props.id}
          onClick={addCart}
        />
      </div>
    </div>
  );
}
