import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../features/cartSlice";

const Shop = () => {
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>
      <p>Cart Items: {count}</p>
      <button onClick={() => dispatch(addToCart(1))}>Add 1 item</button>
      <button onClick={() => dispatch(addToCart(2))}>Add 2 items</button>
      <button onClick={() => dispatch(removeFromCart())}>Remove item</button>
      <button onClick={() => dispatch(clearCart())}>Clear items</button>
    </div>
  );
};

export default Shop;