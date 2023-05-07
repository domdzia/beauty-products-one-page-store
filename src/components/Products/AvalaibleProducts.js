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
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const getChoosenGender = (gender) => {
    setSelectedGender(gender);
  };

  const getChoosenPrice = (price) => {
    setSelectedPrice(price);
  };

  const truthyValue = selectedGender === "all" && selectedPrice === "price";

  const filteredProducts = DUMMY_PRODUCTS.filter((product) => {
    if (
      (!selectedPrice && !selectedGender) ||
      (selectedGender === "all" && !selectedPrice) ||
      (!selectedGender && selectedPrice === "price") ||
      truthyValue
    ) {
      return true;
    } else if (
      selectedGender !== "all" &&
      selectedGender !== "" &&
      !selectedPrice
    ) {
      return product.gender === selectedGender;
    } else if (!selectedGender && selectedPrice === "20") {
      return Number(product.price) < Number(selectedPrice);
    } else if (!selectedGender && selectedPrice === "21") {
      return Number(product.price) > Number(selectedPrice);
    } else if (
      selectedGender !== "all" &&
      selectedGender !== "" &&
      selectedPrice === "20"
    ) {
      return (
        Number(product.price) < Number(selectedPrice) &&
        product.gender === selectedGender
      );
    } else if (
      selectedGender !== "all" &&
      !selectedGender !== "" &&
      selectedPrice === "21"
    ) {
      return (
        Number(product.price) > Number(selectedPrice) &&
        product.gender === selectedGender
      );
    } else if (
      selectedGender !== "all" &&
      !selectedGender !== "" &&
      selectedPrice === "price"
    ) {
      return product.gender === selectedGender;
    } else if (selectedGender === "all" && selectedPrice === "20") {
      return Number(product.price) < Number(selectedPrice);
    } else if (selectedGender === "all" && selectedPrice === "21") {
      return Number(product.price) > Number(selectedPrice);
    }
  });

  return (
    <React.Fragment>
      <h2 className={classes["container-title"]}>Our Products</h2>
      <Filter
        onGenderHandler={getChoosenGender}
        onPriceHandler={getChoosenPrice}
      />

      <Card>
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
