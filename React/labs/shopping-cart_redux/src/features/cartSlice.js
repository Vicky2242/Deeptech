import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state) => {
      state.items += 1;
      console.log("Action: cart/add", "Items:", state.items);
    },
    remove: (state) => {
      if (state.items > 0) {
        state.items -= 1;
        console.log("Action: cart/remove", "Items:", state.items);
      }
    },
    reset: (state) => {
      state.items = 0;
      console.log("Action: cart/reset", "Items:", state.items);
    },
  },
});

export const { add, remove, reset } = cartSlice.actions;
export default cartSlice.reducer;