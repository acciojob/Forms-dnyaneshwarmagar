// Form.js
import React from 'react';
import Card from './Card';

const Form = () => {
  return (
    <Card>
      <form id="info-form">
        <input type="text" id="full_name" placeholder="Full Name" />
        <br />
        <input type="email" id="email" placeholder="Email" />
        <br />
        <input type="password" id="password" placeholder="Password" />
        <br />
        <input type="password" id="password_confirmation" placeholder="Confirm Password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default Form;
