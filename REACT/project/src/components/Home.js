import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

export default function Home({ login }) {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="mx-auto w-max pt-5">
        <div className="grid grid-cols-4 gap-5">
          {data &&
            data.map((i) => {
              return (
                <div className="overflow-hidden border border-0 rounded-md">
                  <img
                    src={i.image}
                    className="object-contain overflow-hidden border border-1 w-32 h-32 bg-white"
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
