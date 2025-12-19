import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../features/wishlistSlice";

const Wishlist = () => {
  const count = useSelector((state) => state.wishlist.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2> Wishlist</h2>
      <p>Wishlist Items: {count}</p>
      <button onClick={() => dispatch(addToWishlist())}>Add to Wishlist</button>
      <button onClick={() => dispatch(removeFromWishlist())}>Remove from Wishlist</button>
    </div>
  );
};

export default Wishlist;