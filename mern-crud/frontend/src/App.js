import React from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>User manager</h2>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
