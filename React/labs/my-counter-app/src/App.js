// App.js
import React, { useState } from "react";
import CounterContext from "./CounterContext";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import DisplayCounter from "./components/DisplayCounter";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Global Counter App</h1>
        <IncreaseCounter />
        <DecreaseCounter />
        <DisplayCounter />
      </div>
    </CounterContext.Provider>
  );
}

export default App;