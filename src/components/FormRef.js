// FormRef.js
import React, { useRef } from 'react';
import Card from './Card';

const FormRef = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission using useRef
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <input type="text" ref={fullNameRef} id="full_name" placeholder="Full Name" />
        <br />
        <input type="email" ref={emailRef} id="email" placeholder="Email" />
        <br />
        <input type="password" ref={passwordRef} id="password" placeholder="Password" />
        <br />
        <input type="password" ref={passwordConfirmationRef} id="password_confirmation" placeholder="Confirm Password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
