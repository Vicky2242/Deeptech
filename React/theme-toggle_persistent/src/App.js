import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./features/themeSlice";

function App() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const appStyle = {
    backgroundColor: theme === "light" ? "#f9f9f9" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h2>Theme Toggler Demo</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;