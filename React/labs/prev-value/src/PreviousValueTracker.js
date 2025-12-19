import React, { useState, useRef } from "react";
import "./PreviousValueTracker.css"; // import CSS file

function PreviousValueTracker() {
  const [currentValue, setCurrentValue] = useState("");
  const prevValueRef = useRef("");

  const handleChange = (e) => {
    // Step 1: store old value in useRef
    prevValueRef.current = currentValue;

    // Step 2: update current value using useState
    setCurrentValue(e.target.value);
  };

  return (
    <div className="card">
      <h1>Previous Value Tracking Using useRef</h1>
      <input
        type="text"
        value={currentValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <div className="output">
        <p>
          <strong>Current Value:</strong> {currentValue || "-"}
        </p>
        <p>
          <strong>Previous Value:</strong> {prevValueRef.current || "-"}
        </p>
      </div>
    </div>
  );
}

export default PreviousValueTracker;