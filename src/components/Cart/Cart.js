import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalCart from "../Modal/ModalCart";
import CartItems from "./CartItems";
import classes from "./Modal.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const choosenProducts = ctx.items;

  const totalAmount = +ctx.totalAmount.toFixed(2);

  const showInfoItem = choosenProducts.map((item) => {
    return (
      <div className={classes.product}>
        <CartItems
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          addNewAmount={() => {
            ctx.addItems({
              ...item,
              amount: 1,
            });
          }}
          removeAmount={ctx.removeItems.bind(null, item.id)}
        />
      </div>
    );
  });

  return (
    <ModalCart show={props.show} handleClose={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>{showInfoItem}</Modal.Body>
      <div className={classes.wrapper}>
        <p>Total Amount</p>
        <span>${totalAmount}</span>
      </div>
      <Modal.Footer>
        <Button
          className="p-2 w-25"
          size="lg"
          variant="secondary"
          onClick={props.handleClose}
        >
          Close
        </Button>
        <Button className="p-2 w-25" size="lg" variant="primary">
          Order
        </Button>
      </Modal.Footer>
    </ModalCart>
  );
};

export default Cart;
