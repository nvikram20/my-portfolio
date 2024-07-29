import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

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

      <label htmlFor="subject" className="form-label">
        Subject
      </label>
      <input
        id="subject"
        type="text"
        name="subject"
        className="form-input"
      />
      <ValidationError
        prefix="Subject"
        field="subject"
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
        SUBMIT
      </button>
    </form>
  );
}

function Connect() {
  return (
    <div className="connect-section">
      <div className="connect-headline">
        <h2>Connect with me!!</h2>
        <p>Feel free to reach out via the form for any inquiries or collaborations.</p>
      </div>
      <div className="form-wrapper">
        <ContactForm />
      </div>
    </div>
  );
}

export default Connect;
