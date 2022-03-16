import React, { useState } from 'react';

import { validateEmail } from '../../../utils/helpers.js';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    }
     else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h2>Email: angelaloftus@yahoo.com</h2>
      <h2>Phone Number: (512) 317-4554</h2>
     <h2>LinkedIn: https://www.linkedin.com/in/angela-l-701856215/</h2>
    <h2>Github: https://github.com/AngelaLoftus</h2>
      
    </section>
  );
}

export default Contact;