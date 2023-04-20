import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";  
import Card from "../UI/Card";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        Title={props.items[0].name}
        Date={props.items[0].date}
        Amount={props.items[0].price}
      />
      <ExpenseItem
        Title={props.items[1].name}
        Date={props.items[1].date}
        Amount={props.items[1].price}
      />
      <ExpenseItem
        Title={props.items[2].name}
        Date={props.items[2].date}
        Amount={props.items[2].price}
      />
      <ExpenseItem
        Title={props.items[3].name}
        Date={props.items[3].date}
        Amount={props.items[3].price}
      />
    </Card>
  );
}
