import CartContext from "./cart-context";
import { useReducer } from "react";

const reducerItems = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const productReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
      const foundedIndex = state.items.findIndex(
        (elem) => elem.id === action.item.id
      );

      const element = state.items[foundedIndex];

      if (element) {
        const updatedItems = [...state.items];
        const newItem = {
          ...element,
          amount: element.amount + action.item.amount,
        };
        updatedItems[foundedIndex] = newItem;

        const updatedAmount =
          state.totalAmount + action.item.amount * action.item.price;

        return {
          items: updatedItems,
          totalAmount: updatedAmount,
        };
      } else {
        const updatedItems = state.items.concat(action.item);

        const updatedAmount =
          state.totalAmount + action.item.amount * action.item.price;

        return {
          items: updatedItems,
          totalAmount: updatedAmount,
        };
      }
    }

    if (action.type === "REMOVE_ITEM") {
      const foundedIndex = state.items.findIndex(
        (elem) => elem.id === action.id
      );

      const element = state.items[foundedIndex];

      if (element.amount === 1) {
        const updatedItem = state.items.filter((elem) => elem.id !== action.id);

        const updatedAmount = state.totalAmount - element.price;

        return {
          items: updatedItem,
          totalAmount: updatedAmount,
        };
      }

      if (element) {
        const updatedItem = [...state.items];
        const newItems = {
          ...element,
          amount: element.amount - 1,
        };
        updatedItem[foundedIndex] = newItems;

        const updatedAmount = state.totalAmount - element.price;

        return {
          items: updatedItem,
          totalAmount: updatedAmount,
        };
      }
    }
  };

  const [stateItems, dispatch] = useReducer(productReducer, reducerItems);

  const addItemsHandler = (item) => {
    dispatch({ type: "ADD_ITEM", item: item });
  };

  const removeItemsHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", id: id });
  };

  const enteredContext = {
    items: stateItems.items,
    totalAmount: stateItems.totalAmount,
    addItems: addItemsHandler,
    removeItems: removeItemsHandler,
  };

  return (
    <CartContext.Provider value={enteredContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
