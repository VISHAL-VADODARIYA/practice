import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Menswear from './components/Menswear'
import Womenswear from "./components/Womenswear";
import Jewelery from "./components/Jewelery";
import Electronics from "./components/Electronics";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/Menswear" element={<Menswear />}></Route>
        <Route exact path="/Womenswear" element={<Womenswear />}></Route>
        <Route exact path="/Jewelery" element={<Jewelery />}></Route>
        <Route exact path="/Electronics" element={<Electronics />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
