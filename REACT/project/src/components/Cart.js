import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

export default function Cart({Buy,
  setBuy,
  image,
  title,
  description,
  price,
  count,
  rate,
  id
}) {
  const [tog, setTog] = useState(false);
  const toggle = () => {
    setTog(!tog);
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div class="fixed grid place-items-center w-full p-4 bg-gray-800 opacity-50 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full"></div>,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <div className="bg-transparent">
          <div
            id="staticModal"
            data-modal-backdrop="static"
            tabindex="-1"
            aria-hidden="true"
            class="fixed grid place-items-center w-full p-4 bg overflow-x-hidden overflow-y-auto md:inset-0  max-h-full"
          >
            {Buy ? { Buy.map((i)=>{return<div class="max-w-sm bg-white rounded-lg shadow grid content-between p-5">
              <div>
                <div className="flex justify-center p-3">
                  <a href="#">
                    <img
                      class="rounded-t-lg  object-contain overflow-hidden border border-1 w-48 h-48 bg-white"
                      src={i.image}
                      alt={i.image + "Image"}
                    />
                  </a>
                </div>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {i.title}
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
                      {i.description}
                    </div>
                  )}
                </p>
                <h5 class="mb-3 font-bold text-gray-700">Price : {i.price} ₹</h5>
                <p class="mb-3 font-normal text-gray-700">
                  Rating : {i.rate}★ <br />
                  Rating by {i.count} People
                </p>{" "}
              </div>
              <div className="flex justify-around mt-full">
                <Button
                  class="bg-green-700 text-white hover:bg-green-800"
                  text="Buy"
                  id={i.id}
                />
                <Button
                  class="bg-blue-700 text-white hover:bg-blue-800"
                  text="Add To Cart"
                  id={i.id}
                />
              </div>
            </div>})} : <div class="bg-white rounded-lg shadow p-5">Please Add item to Cart</div>}
          </div>
        </div>,
        document.getElementById("form")
      )}
    </Fragment>
  );
}
