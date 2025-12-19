import React, { useCallback, useState } from 'react';
import Child from './components/Child';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const addCount = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <Child onAdd={addCount} />
      <h2>Counter: {count}</h2>
    </div>
  );
}

export default App;