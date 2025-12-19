import React from "react";
import {foodMenu} from "./data/foodMenu";
import FoodNames from "./components/FoodNames";
import FoodIdName from "./components/FoodIdName";
import FoodPrice from "./components/FoodPrice";
import FoodCategory from "./components/FoodCategory";
import FoodFullMenu from "./components/FoodFullMenu";

function App() {
  return (
    <div>
      <h1>Online Food Delivery App</h1>

      <h2>1: Food Item Names</h2>
      <FoodNames menu={foodMenu} />

      <h2>2: ID — Item Name</h2>
      <FoodIdName menu={foodMenu} />

      <h2>3: Item Name and Price</h2>
      <FoodPrice menu={foodMenu} />

      <h2>4: Item — Category — Veg/Non-Veg</h2>
      <FoodCategory menu={foodMenu} />

      <h2>5: Full Menu</h2>
      <FoodFullMenu menu={foodMenu} />
    </div>
  );
}

export default App;