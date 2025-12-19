import React from 'react'

function Child({onAdd}) {

    console.log("Child component Rendered")
  return <button onClick={onAdd}>Add</button>
}

export default React.memo(Child)
