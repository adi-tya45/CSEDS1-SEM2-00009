import React, { useState } from 'react';
import './App.css';

function App() {
  // State Management using useState Hook
  const [counter, setCounter] = useState(0);

  // Event handler for Increment button
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  // Event handler for Decrement button
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  // Event handler for Reset button
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Counter Application</h1>
        <p>State Management using useState Hook</p>
      </header>

      <div className="counter-card">
        <div className="counter-display">
          <h2>Counter Value</h2>
          <p className="counter-value">{counter}</p>
        </div>

        <div className="button-group">
          <button 
            className="btn btn-increment"
            onClick={handleIncrement}
          >
            Increment (+)
          </button>

          <button 
            className="btn btn-decrement"
            onClick={handleDecrement}
          >
            Decrement (-)
          </button>

          <button 
            className="btn btn-reset"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        <div className="info-section">
          <h3>Learning Objectives</h3>
          <ul>
            <li>Understanding React Hooks</li>
            <li>Using useState for state management</li>
            <li>Handling button click events</li>
            <li>Updating UI dynamically</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
