import React from "react";
import classes from "./Filter.module.css";

import Form from "react-bootstrap/Form";

function Filter() {
  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <label className={classes.label}>Filter</label>
        <Form.Select className={classes.filter}>
          <option>Gender</option>
          <option>For Women</option>
          <option>For Men</option>
        </Form.Select>
        <Form.Select className={classes.filter}>
          <option>Price</option>
          <option>Under 20$</option>
          <option>Over 20$</option>
        </Form.Select>
      </div>
    </React.Fragment>
  );
}

export default Filter;
