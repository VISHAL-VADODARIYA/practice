import React from "react";
import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { name: "Toilet Paper", date: new Date(2020, 7, 13), price: 94.12 },
    { name: "New TV", date: new Date(2021, 2, 11), price: 799.49 },
    { name: "car insurance", date: new Date(2021, 2, 28), price: 294.67 },
    { name: "New Desk(Wooden)", date: new Date(2021, 5, 11), price: 450 },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Lets started project"),
  //   React.createElement(Expenses, { items: expenses })
  // );
}

export default App;
