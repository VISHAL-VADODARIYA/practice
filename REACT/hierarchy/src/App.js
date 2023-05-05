import {  useState } from "react";
import "./App.css";
import List from "./components/Hierarchy";

function App() {
  const [data1, setData1] = useState();
  // useEffect(() => {
    fetch("data.json")
      .then((data) => data.json())
      .then((data) => setData1(data))
      .catch((error) => console.log(error));
  // }, []);
  return <div>{data1 ? <List dt={data1} /> : <></>}</div>;
}

export default App;
