// import React from "react";
// import './style.css' 

// const Contact = () => (
//   <div>
//     <h1>Contact Page</h1>
//     <p>
//       Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna.
//       Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean
//       pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod,
//       tincidunt bibendum mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
//       posuere, eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque nec metus
//       vestibulum, egestas massa eu, sollicitudin ipsum. Nulla facilisi. Sed ut erat ligula. Nam
//       tincidunt nunc in nibh dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
//       conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus. Etiam vel
//       condimentum magna, quis tempor nulla.
//     </p>
//   </div>
// );

// export default Contact;

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
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;