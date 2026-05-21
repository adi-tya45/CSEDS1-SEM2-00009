import React from 'react';
import ReactDOM from 'react-dom/client';
import Student from './App';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Information Dashboard</h1>
        <p>React Components & Props Experiment</p>
      </header>
      
      <div className="student-list">
        {/* Reusing the Student component with different data */}
        <Student name="Aditya Tilak Sharma" course="Computer Science" marks={85} />
        <Student name="Harshita Bhardwaj" course="Data Science" marks={92} />
        <Student name="Rohan Das" course="Cyber Security" marks={35} />
        <Student name="Avijit Singh" course="Cloud Computing" marks={78} />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


export default App;