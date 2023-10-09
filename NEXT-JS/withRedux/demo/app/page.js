'use client';
import { fetchData } from "@/store/dataSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const data1 = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  async function getData() {
    const res = await fetch("https://fakestoreapi.com/products/");
    if (res.status !== 200) {
      console.log("error while data fetching");
      
      // throw new Error("Failed to fetch data");
    } else {
      
      dispatch(fetchData(await res.json())); ;
    }
  }
  
  useEffect(() => {
  getData()
    
    // console.log(data1)
  }, []);
  return (
    <div>
      {data1.length > 1 &&
        data1.map((val) => {
          return <h1 key={val.id}>{val.id} -- {val.title} -- {val.price} --{val.description} </h1>;
        })}
        {/* <h1>hello </h1> */}
    </div>
  );
}
