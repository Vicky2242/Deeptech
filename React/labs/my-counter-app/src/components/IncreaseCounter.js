// IncreaseCounter.js
import React, { useContext } from "react";
import CounterContext from "../CounterContext";

function IncreaseCounter() {
  const { increase } = useContext(CounterContext);

  return (
    <button onClick={increase} style={{ margin: "10px", padding: "10px" }}>
      Increase
    </button>
  );
}

export default IncreaseCounter;