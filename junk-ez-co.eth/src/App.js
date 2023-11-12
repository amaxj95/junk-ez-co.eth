import React, { useState } from 'react';
import logo from './Untitled design (1).png'; // Ensure this path is correct
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={logo} 
          className="App-logo" 
          alt="logo" 
          onClick={toggleButtons} 
          style={{ cursor: 'pointer' }}
        />

        {showButtons && (
          <div>
            <button onClick={toggleButtons}>Return</button>
            <Link to="/store"><button>Shop Now</button></Link>
            <Link to="/wastemates"><button>Find a Service</button></Link>
            {/* Add additional buttons as needed */}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
