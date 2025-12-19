import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.user);

  return (
    <div>
      <h2>Simple Saga API Call Demo</h2>

      <button onClick={() => dispatch(fetchUsers())}>
        Load Users
      </button>

      {loading && <p>Loading...</p>}

      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}

export default App;
