import React from 'react';
import './App.css'; // Importing the component-specific styles

function Student(props) {
  // Destructuring props for cleaner code
  const { name, course, marks } = props;

  // Simple logic to determine pass/fail styling dynamically
  const statusClass = marks >= 40 ? 'pass' : 'fail';

  return (
    <div className="student-card">
      <h2 className="student-name">{name}</h2>
      <div className="student-details">
        <p><strong>Course:</strong> {course}</p>
        <p><strong>Marks:</strong> {marks} / 100</p>
        <p>
          <strong>Status:</strong> 
          <span className={`status-badge ${statusClass}`}>
            {marks >= 40 ? ' Passed' : ' Failed'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Student;