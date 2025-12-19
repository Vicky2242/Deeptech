import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, reset } from "../features/cartSlice";

const CartTracker = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>🛒 Welcome to Shopping Application</h2>
      <p>Items in Cart: {items}</p>
      <button onClick={() => dispatch(add())}>Add</button>
      <button onClick={() => dispatch(remove())}>Remove</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default CartTracker;