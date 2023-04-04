import React, { useState } from "react";
import ProductItem from "./ProductItem";
import perfume from "../../Images/icons8-perfume-bottle-100.png";
import classes from "./AvalaibleProducts.module.css";
import Card from "../UI/Card";
import Filter from "../Filters/Filter";

const DUMMY_PRODUCTS = [
  {
    id: Math.random(Math.floor * 4),
    gender: "female",
    category: "perfume",
    img: { perfume },
    title: "Fresh Cotton",
    description: "",
    price: 2.99,
  },
  {
    id: Math.random(Math.floor * 4),
    gender: "female",
    category: "perfume",
    img: { perfume },
    title: "Apple Juice",
    description: "",
    price: 19.99,
  },
  {
    id: Math.random(Math.floor * 4),
    gender: "male",
    category: "perfume",
    img: { perfume },
    title: "Passion Fruit",
    description: "",
    price: 22.98,
  },
  {
    id: Math.random(Math.floor * 4),
    gender: "male",
    category: "perfume",
    img: { perfume },
    title: "Citrus",
    description: "",
    price: 12.0,
  },
  {
    id: Math.random(Math.floor * 4),
    gender: "female",
    category: "perfume",
    img: { perfume },
    title: "Sweet Orange",
    description: "",
    price: 23.55,
  },
  {
    id: Math.random(Math.floor * 4),
    gender: "female",
    category: "perfume",
    img: { perfume },
    title: "Romantic Flower",
    description: "",
    price: 14.5,
  },
  {
    id: Math.random(Math.floor * 4),
    gender: "male",
    category: "perfume",
    img: { perfume },
    title: "Pink Heaven",
    description: "",
    price: 9.25,
  },
];

const AvalaibleProduct = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const getChoosenOption = (selectedOptions) => {
    setSelectedOption(selectedOptions);
  };

  const filteredProducts = DUMMY_PRODUCTS.filter((product) => {
    if (selectedOption === "20") {
      return Number(product.price) < Number(selectedOption);
    } else if (selectedOption === "21") {
      return Number(product.price) > Number(selectedOption);
    } else {
      return product.gender === selectedOption;
    }
  });

  return (
    <React.Fragment>
      <h2 className={classes["container-title"]}>Our Products</h2>
      <Filter onFilterHandler={getChoosenOption} />
      <Card>
        {selectedOption === "all" &&
          DUMMY_PRODUCTS.map((item) => {
            return (
              <ProductItem
                key={item.id}
                img={perfume}
                title={item.title}
                price={item.price}
                gender={item.gender}
                category={item.category}
                id={item.id}
              />
            );
          })}
        {selectedOption === "price" &&
          DUMMY_PRODUCTS.map((item) => {
            return (
              <ProductItem
                key={item.id}
                img={perfume}
                title={item.title}
                price={item.price}
                gender={item.gender}
                category={item.category}
                id={item.id}
              />
            );
          })}
        {!selectedOption &&
          DUMMY_PRODUCTS.map((item) => {
            return (
              <ProductItem
                key={item.id}
                img={perfume}
                title={item.title}
                price={item.price}
                gender={item.gender}
                category={item.category}
                id={item.id}
              />
            );
          })}
        {filteredProducts.map((item) => {
          return (
            <ProductItem
              key={item.id}
              img={perfume}
              title={item.title}
              price={item.price}
              gender={item.gender}
              category={item.category}
              id={item.id}
            />
          );
        })}
      </Card>
    </React.Fragment>
  );
};

export default AvalaibleProduct;
