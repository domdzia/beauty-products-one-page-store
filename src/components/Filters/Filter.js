import React, { useState } from "react";
import classes from "./Filter.module.css";
import Form from "react-bootstrap/Form";

function Filter(props) {
  const [selectValue, setSelectValue] = useState("");

  const valueOptionsHandler = (e) => {
    setSelectValue(e.target.value);
  };

  props.onFilterHandler(selectValue);

  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <label className={classes.label}>Filter</label>
        <Form.Select onChange={valueOptionsHandler} className={classes.filter}>
          <option value="all">All</option>
          <option value="female">For Women</option>
          <option value="male">For Men</option>
        </Form.Select>
        <Form.Select onChange={valueOptionsHandler} className={classes.filter}>
          <option value="price">Price</option>
          <option value="20">Under 20$</option>
          <option value="21">Over 20$</option>
        </Form.Select>
      </div>
    </React.Fragment>
  );
}

export default Filter;
