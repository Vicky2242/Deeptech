import React, { useReducer } from 'react'

const initialState = {
  name: "",
  email: "",
  age: "",
  hobby: "",
}

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        [action.field]: action.value   // ✅ use field here
      }
    case "RESET":
      return initialState
    default:
      return state
  }
}

export default function MyForm() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>Form handling using useReducer</h2>
      <form>
        <input
          placeholder="Name"
          value={state.name}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_DATA",
              field: "name",   // ✅ matches reducer
              value: e.target.value,
            })
          }
        />
        <br />

        <input
          placeholder="Email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_DATA",
              field: "email",
              value: e.target.value,
            })
          }
        />
        <br />

        <input
          placeholder="Age"
          value={state.age}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_DATA",
              field: "age",
              value: e.target.value,
            })
          }
        />
        <br />

        <input
          placeholder="Hobby"
          value={state.hobby}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_DATA",
              field: "hobby",
              value: e.target.value,
            })
          }
        />
        <br />

        <button type="button" onClick={() => dispatch({ type: "RESET" })}>
          Reset
        </button>
      </form>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}