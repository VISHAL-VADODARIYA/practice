import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mx-auto w-max pt-5">
        <div className="grid grid-cols-4 gap-5">
          {data &&
            data.map((i) => {
              return (
                <div className="overflow-hidden border border-0 rounded-md">
                  <img
                    src={i.image}
                    className="object-contain"
                    width="300px"
                    height="30px"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
