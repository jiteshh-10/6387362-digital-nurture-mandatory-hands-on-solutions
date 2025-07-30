import React, { useState } from 'react';
import './App.css';
import ThemeContext from './ThemeContext';
import EmployeeList from './EmployeeList';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div className="container">
        <h1>👥 Employee Manager</h1>
        <div className="theme-toggle">
          <button onClick={() => setTheme('light')}>Light Theme</button>
          <button onClick={() => setTheme('dark')}>Dark Theme</button>
        </div>
        <EmployeeList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
