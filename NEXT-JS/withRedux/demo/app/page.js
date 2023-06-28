
// import { fetchData } from "@/store/dataSlice";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // const data = useSelector((state) => state.data);
  // const dispatch = useDispatch();

  // async function getData() {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  //   if (res.status !== 200) {
  //     console.log("error while data fetching");
  //     // throw new Error("Failed to fetch data");
  //   } else {
      
  //     return await res.json();
  //   }
  // }

  // useEffect(() => {
  //   // console.log(getData())
  //   // dispatch(fetchData(getData()));
  // }, []);

  return (
    <div>
      {/* {data.length > 1 &&
        data.map((val) => {
          return <h1 key={val.id}>{val.id}</h1>;
        })} */}
        <h1>hello </h1>
    </div>
  );
}
