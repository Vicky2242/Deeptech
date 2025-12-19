import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state) => {
      state.count += 1;
    },
    removeFromWishlist: (state) => {
      if (state.count > 0) state.count -= 1;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;