import React, { useState } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import ModalTemplate from "./components/Modal/Modal";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <React.Fragment>
      <ModalTemplate show={show} handleClose={handleClose} title="Your Order" />
      <Header onClick={handleShow} />
      <Products />
    </React.Fragment>
  );
}

export default App;
