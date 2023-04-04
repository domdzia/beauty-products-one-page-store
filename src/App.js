import React, { useState } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <CartProvider>
      <Cart show={show} handleClose={handleClose} />
      <Header onClick={handleShow} />
      <Products />
    </CartProvider>
  );
}

export default App;
