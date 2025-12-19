import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, reset } from "../features/cartSlice";  // ✅ use new names

const Shop = () => {
  const items = useSelector((state) => state.cart.items); // ✅ matches slice
  const dispatch = useDispatch();

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>
      <p>Cart Items: {items}</p>
      <button onClick={() => dispatch(add())}>Add 1 item</button>
      <button onClick={() => dispatch(add())}>Add another item</button>
      <button onClick={() => dispatch(remove())}>Remove item</button>
      <button onClick={() => dispatch(reset())}>Clear items</button>
    </div>
  );
};

export default Shop;