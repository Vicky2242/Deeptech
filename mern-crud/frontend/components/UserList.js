import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user._id}>
          {user.name} ({user.email}) - {user.age}
          <button onClick={() => deleteUser(user._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;