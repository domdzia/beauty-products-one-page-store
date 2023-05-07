import React, { useEffect, useState } from "react";
import classes from "./Filter.module.css";
import Form from "react-bootstrap/Form";

function Filter(props) {
  const [genderValue, setGenderValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

  const valueOptionsHandler = (e) => {
    setGenderValue(e.target.value);
  };

  const priceOptionsHandler = (e) => {
    setPriceValue(e.target.value);
  };

  useEffect(() => {
    props.onGenderHandler(genderValue);
  }, [genderValue, props]);

  useEffect(() => {
    props.onPriceHandler(priceValue);
  }, [priceValue, props]);

  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <label className={classes.label}>Filter</label>
        <Form.Select onChange={valueOptionsHandler} className={classes.filter}>
          <option value="all">All</option>
          <option value="female">For Women</option>
          <option value="male">For Men</option>
        </Form.Select>
        <Form.Select onChange={priceOptionsHandler} className={classes.filter}>
          <option value="price">Price</option>
          <option value="20">Under 20$</option>
          <option value="21">Over 20$</option>
        </Form.Select>
      </div>
    </React.Fragment>
  );
}

export default Filter;
