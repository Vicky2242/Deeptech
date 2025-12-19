import React from 'react'
import {useState, useRef} from 'react'

function App() {

  const clickRef = useRef(0);

  const[show, setShow] = useState(0);

  const handleClick = () => {

    clickRef.current++;

    console.log("Clicked: ", clickRef.current);

    setShow(clickRef.current)
  };

  return (
    <div>
      <h2>Counter Example using UseRef</h2>

      <p>Counter: {show} </p>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
