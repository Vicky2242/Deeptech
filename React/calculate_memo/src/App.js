import React, { useMemo, useState } from 'react'

function App() {

  const[count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log('Calculationg');
      return 10000000;
  }, []);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Value: {expensiveValue}</h2>
      <button onClick={() => setCount(count+1)}>Click me</button>
    </div>
  )
}

export default App;
