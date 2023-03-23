import { Button } from "react-bootstrap";
import svg from "../../cart.svg";
import classes from "./HeaderCartButton.module.css";
import React, { useContext } from "react";
import CartContext from "../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const sumValues = ctx.items.reduce((currNum, items) => {
    return currNum + items.amount;
  }, 0);

  return (
    <React.Fragment>
      <Button
        className="w-25 p-3 d-flex justify-content-center"
        variant="secondary"
        type="button"
        size="lg"
        onClick={props.onClick}
      >
        <img src={svg} alt="cart" className={classes.logo}></img>
        <p className={classes.number}>{sumValues}</p>
      </Button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
