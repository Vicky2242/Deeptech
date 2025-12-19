import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/userSlice";

const User = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>👤 User Status</h2>
      <p>{isLoggedIn ? "Logged In ✅" : "Logged Out ❌"}</p>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default User;