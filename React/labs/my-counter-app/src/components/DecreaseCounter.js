// DecreaseCounter.js
import React, { useContext } from "react";
import CounterContext from "../CounterContext";

function DecreaseCounter() {
  const { decrease } = useContext(CounterContext);

  return (
    <button onClick={decrease} style={{ margin: "10px", padding: "10px" }}>
      Decrease
    </button>
  );
}

export default DecreaseCounter;