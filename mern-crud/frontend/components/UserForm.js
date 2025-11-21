import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [user, setUser] = useState({ name: '', email: '', age: '' });

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users', user);
    setUser({ name: '', email: '', age: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={user.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" />
      <input name="age" value={user.age} onChange={handleChange} placeholder="Age" />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;