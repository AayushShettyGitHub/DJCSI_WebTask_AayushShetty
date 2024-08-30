import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form Data Submitted: ', formData);
    alert('Message Sent!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div id="contact-us" className="contact-us">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <h3>Send A Message</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your E-mail *"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message here *"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
      <div className="get-in-touch">
        <h3>Get In Touch</h3>
        <p>Email: <a href="mailto:djsceunicode@gmail.com">djsceunicode@gmail.com</a></p>
        <p>Phone: <a href="tel:+917021302112">+91 70213 02112</a></p>
        <p>Address: D. J. Sanghavi College of Engineering, Vile Parle, Mumbai - 400 055</p>
      </div>
    </div>
  );
};

export default Contact;
