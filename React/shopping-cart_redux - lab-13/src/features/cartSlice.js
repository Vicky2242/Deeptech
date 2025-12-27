import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.count += action.payload || 1;
    },
    removeFromCart: (state) => {
      if (state.count > 0) state.count -= 1;
    },
    clearCart: (state) => {
      state.count = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;