import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./features/authSlice";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Auth Demo with Persist Middleware</h2>

      {isAuthenticated ? (
        <>
          <p>Welcome, {user?.name}!</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={() => dispatch(login({ name: "Vigneshwaran" }))}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;