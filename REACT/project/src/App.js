import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Menswear from "./components/Menswear";
import Womenswear from "./components/Womenswear";
import Jewelery from "./components/Jewelery";
import Electronics from "./components/Electronics";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  //data of add cart store in cartData...
  const [cartData, setCartData] = useState({});

  const [login, setLogin] = useState({ isLogin: false, username: "" });

  return (
    <>
      <Router>
        <Navbar login={login} />
        <Routes>
          {/* {login.isLogin ? ( */}
          <Route exact path="/" element={<Home />}></Route>
          {/* ) : (
            <Route
              exact
              path="/"
              element={<Login setLogin={setLogin} />}
            ></Route>
          )} */}
          <Route
            exact
            path="/login"
            element={<Login setLogin={setLogin} />}
          ></Route>
          <Route
            exact
            path="/Menswear"
            element={<Menswear cartData={cartData} setCartData={setCartData} />}
          ></Route>
          <Route
            exact
            path="/Womenswear"
            element={
              <Womenswear cartData={cartData} setCartData={setCartData} />
            }
          ></Route>
          <Route
            exact
            path="/Jewelery"
            element={<Jewelery cartData={cartData} setCartData={setCartData} />}
          ></Route>
          <Route
            exact
            path="/Electronics"
            element={
              <Electronics cartData={cartData} setCartData={setCartData} />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
