import { Button } from "react-bootstrap";
import svg from "../../cart.svg";
import classes from "./HeaderCartButton.module.css";
import React from "react";

const HeaderCartButton = (props) => {
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
        <p className={classes.number}>0</p>
      </Button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
