import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../features/counterSlice'

function Counter() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
      <h1> Counter Example Using Redux library</h1>
      <p>Value : {count}</p>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
