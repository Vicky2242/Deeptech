import React from "react";
import Shop from "./components/Shop";
import User from "./components/User";
import Wishlist from "./components/Wishlist";
import QuantityTracker from "./components/QuantityTracker";
import CartTracker from "./components/QuantityTracker"; // NEW
import "./App.css";

function App() {
  return (
    <div>
      <h1>🛍️ Simple Shopping Website</h1>
      <div className="app-container">
        <div className="section-card"><User /></div>
        <div className="section-card"><Shop /></div>
        <div className="section-card"><Wishlist /></div>
        {/* <div className="section-card"><QuantityTracker /></div> */}
      </div>
    </div>
  );
}

export default App;