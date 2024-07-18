import React, { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

function Contact() {
  const [isMessageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here (e.g., send data to server)
    // For demonstration, just set state to show the message sent confirmation
    setMessageSent(true);
  };

  return (
    <motion.section className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Contact</h2>
      {!isMessageSent ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Send</button>
        </form>
      ) : (
        <p>Message sent! Thank You</p>
        
      )}
    </motion.section>
  );
}

export default Contact;
