import React from 'react';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Stack Application</h1>
        <UserList />
      </header>
    </div>
  );
}

export default App;
