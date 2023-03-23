import React, { useState } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Filter from "./components/Filters/Filter";
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
      <Filter />
      <Products />
    </CartProvider>
  );
}

export default App;
