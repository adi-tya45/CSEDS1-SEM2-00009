import React, { useState } from 'react';
import './App.css';

function App() {
  // State Management for Form Data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // State for Error Messages
  const [errors, setErrors] = useState({});

  // State for Success Message
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle Input Change (Controlled Component)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validation Function
  const validateForm = () => {
    const newErrors = {};

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Email must contain @';
    }

    // Validate Password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = validateForm();

    // If there are errors, display them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitted(false);
    } else {
      // If form is valid, show success message
      setErrors({});
      setIsSubmitted(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          password: ''
        });
        setIsSubmitted(false);
      }, 2000);

      console.log('Form Submitted:', formData);
    }
  };

  return (
    <div className="app-container">
      <div className="form-wrapper">
        <header className="form-header">
          <h1>Registration Form</h1>
          <p>Create your account securely</p>
        </header>

        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Registration Successful!</h2>
            <p>Welcome, {formData.name}!</p>
            <p className="submitted-email">Email: {formData.email}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="registration-form">
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`form-input ${errors.name ? 'input-error' : ''}`}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`form-input ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password <span className="required">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter a strong password"
                className={`form-input ${errors.password ? 'input-error' : ''}`}
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
              <div className="password-info">
                Password must be at least 6 characters long
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        )}

        {/* Learning Objectives */}
        <div className="learning-section">
          <h3>Learning Concepts Covered</h3>
          <ul>
            <li>Controlled Components in React</li>
            <li>useState Hook for Form Management</li>
            <li>Form Validation Logic</li>
            <li>Event Handling (onChange, onSubmit)</li>
            <li>Dynamic Error Message Display</li>
            <li>Conditional Rendering</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
