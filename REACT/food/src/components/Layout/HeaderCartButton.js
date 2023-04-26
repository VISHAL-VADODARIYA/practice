import { useContext } from "react";
import CartIcon from "../Cart/CratIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButoon.module.css";

const HeaderCartButton = (props) => {

const cartCtx = useContext(CartContext);

const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
},0);
 
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
