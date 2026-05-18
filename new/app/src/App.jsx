import React, { useState } from 'react';
import './index.css';

const RegistrationApp = () => {

  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.includes('@')) tempErrors.email = "Invalid email format";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email
      };

   
      setUsers([...users, newUser]);
      
      setSuccessMsg("User added successfully!");
      setFormData({ name: '', email: '', password: '' }); 
      setErrors({});
    }
  };

  return (
    <div className="container">
      <h2>Local Student Registry</h2>

      
      <form onSubmit={handleSubmit} className="form-card">
        <input 
          name="name" 
          placeholder="Enter Name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        {errors.name && <span className="error-text">{errors.name}</span>}

        <input 
          name="email" 
          placeholder="Enter Email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        {errors.email && <span className="error-text">{errors.email}</span>}

        <input 
          type="password" 
          name="password" 
          placeholder="Create Password" 
          value={formData.password} 
          onChange={handleChange} 
        />
        {errors.password && <span className="error-text">{errors.password}</span>}

        <button type="submit">Add to List</button>
        {successMsg && <p className="success-text">{successMsg}</p>}
      </form>

      <hr />


      <h3>Registered Names & Emails</h3>
      <div className="user-list">
        {users.length === 0 ? (
          <p className="empty-msg">No students registered yet.</p>
        ) : (
          users.map(user => (
            <div key={user.id} className="user-entry">
              <strong>{user.name}</strong> — {user.email}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RegistrationApp;