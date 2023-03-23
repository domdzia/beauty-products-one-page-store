import classes from "./Items.module.css";
import React from "react";
import { Button } from "react-bootstrap";

const CartItems = (props) => {
  return (
    <React.Fragment>
      <div>
        <p className={classes.title}>{props.title}</p>
        <div className={classes.numbers}>
          <p>{props.price}</p>
          <p className={classes.amount}>x{props.amount}</p>
        </div>
      </div>
      <div>
        <Button
          onClick={props.addNewAmount}
          className={classes.button}
          variant="outline-dark"
        >
          +
        </Button>
        <Button
          onClick={props.removeAmount}
          className={classes.button}
          variant="outline-dark"
        >
          -
        </Button>
      </div>
    </React.Fragment>
  );
};

export default CartItems;
