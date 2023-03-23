import classes from "./ProductFormItem.module.css";
import Button from "react-bootstrap/Button";
import { useRef } from "react";

const ProductFormItem = (props) => {
  const inputValueRef = useRef();

  const getInputValue = (e) => {
    e.preventDefault();
    const enteredValueAmount = inputValueRef.current.value;
    const enteredAmountNumber = +enteredValueAmount;

    props.amountValue(enteredAmountNumber);
  };

  return (
    <div>
      <form onSubmit={getInputValue}>
        <div>
          <label className={classes.label}>{props.name} </label>
          <input
            ref={inputValueRef}
            className={classes.input}
            type={props.type}
            {...props.input}
          ></input>
        </div>
        <Button
          className="mt-3"
          variant="secondary"
          type={props.type}
          style={{
            fontSize: "1.2rem",
            letterSpacing: "1px",
            textTransform: "upperCase",
          }}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default ProductFormItem;
