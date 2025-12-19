import React, { useRef, useState } from 'react'

function App() {

  const[time, setTime] = useState(0);

  const timerRef = useRef(null);

  const startTimer = () => {
    if(timerRef.current) return;

    timerRef.current = setInterval(()=>{
      setTime((prev) => prev +1);

    }, 1000)
  };

  const stopTimer = () =>{
    clearInterval(timerRef.current);

    timerRef.current = null;
  };

  const resetTimer =() => {
    clearInterval(timerRef.current);

    setTime(0);
  };
  return (
    <div>
      <h2>Simple Timer Component using useRef</h2>
      <p>Timer: {time} sec</p>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default App;
