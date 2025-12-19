// DisplayCounter.js
import React, { useContext } from "react";
import CounterContext from "../CounterContext";

function DisplayCounter() {
  const { count } = useContext(CounterContext);

  return <h2>Current Count: {count}</h2>;
}

export default DisplayCounter;