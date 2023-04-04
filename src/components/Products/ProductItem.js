import Card from "react-bootstrap/Card";
import ProductFormItem from "./ProductFormItem";
import classes from "./ProductItem.module.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const ProductItem = (props) => {
  const ctx = useContext(CartContext);

  const enteredProduct = (amount) => {
    ctx.addItems({
      id: props.id,
      key: props.id,
      title: props.title,
      price: props.price,
      gender: props.gender,
      category: props.category,
      amount: amount,
    });
    console.log(ctx.addItems);
  };

  return (
    <div>
      <Card
        className={classes["my-card"]}
        style={{ width: "18rem", cursor: "pointer" }}
      >
        <Card.Img variant="top" src={props.img} alt="img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <span>{props.price}</span>
          </Card.Text>
          <ProductFormItem
            amountValue={enteredProduct}
            name="Amount"
            input={{
              type: "number",
              min: "1",
              max: "5",
              defaultValue: "1",
            }}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductItem;
