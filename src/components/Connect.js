import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./Connect.css";
import Navbar from './Navbar';

function ContactForm() {
  const [state, handleSubmit] = useForm("xayrrwqj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="email" className="form-label">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className="form-input"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        className="form-error"
      />
      <label htmlFor="message" className="form-label">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="form-textarea"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        className="form-error"
      />
      <button type="submit" disabled={state.submitting} className="form-button">
        Submit
      </button>
    </form>
  );
}

function Connect() {
  return (
    <div className="connect-container">
      <Navbar />
      <div className="form-wrapper">
        <ContactForm />
      </div>
    </div>
  );
}

export default Connect;
