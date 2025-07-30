import React, { useState } from 'react';
import './App.css';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  let pageContent;
  let authButton;

  if (isLoggedIn) {
    pageContent = <UserPage />;
    authButton = <button onClick={logout}>Logout</button>;
  } else {
    pageContent = <GuestPage />;
    authButton = <button onClick={login}>Login</button>;
  }

  return (
    <div className="container">
      <h1>✈️ Ticket Booking App</h1>
      {authButton}
      {pageContent}
    </div>
  );
}

export default App;
