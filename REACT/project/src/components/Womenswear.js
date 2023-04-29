import React, {  useState } from "react";

import axios from "axios";
import Card from "./Card";


export default function Api({ cartData, setCartData }) {
  const [data, setData] = useState();

  const GetPostsData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((data1) => setData(data1))
      .catch((error) => console.log(error));
  };
  GetPostsData();

  return (
    <div>
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-60 mt-10">
          {data.data.map((i) => {
            return (
              <Card
                cartData={cartData}
                setCartData={setCartData}
                id={i.id}
                image={i.image}
                title={i.title}
                description={i.description}
                price={i.price}
                rate={i.rating.rate}
                count={i.rating.count}
              />
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
