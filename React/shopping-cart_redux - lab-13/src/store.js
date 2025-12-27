import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";
import wishlistReducer from "./features/wishlistSlice";
import messageReducer from "./features/messageSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    wishlist: wishlistReducer,
    message: messageReducer,
    auth: authReducer
  },
});