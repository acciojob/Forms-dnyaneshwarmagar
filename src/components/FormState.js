// FormState.js
import React, { useState } from 'react';
import Card from './Card';

const FormState = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission using useState
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input type="text" id="full_name" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
        <br />
        <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <br />
        <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <br />
        <input type="password" id="password_confirmation" value={formData.passwordConfirmation} onChange={handleChange} placeholder="Confirm Password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormState;
