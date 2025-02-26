import React, { useState } from "react";
import SendButton from "./send_button";

const ContactView = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isEnabled = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  return (
    <section id="contact-view">
      <div className="contact-view-title">
        Let's create <br />
        Something&nbsp;
        <span className="contact-view-title-highlight">Amazing</span>
      </div>
      <form className="contact-view-content">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Enter Subject Here"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label>Message</label>
        <textarea
          type="text"
          name="message"
          placeholder="Enter Your Message"
          cols="40"
          rows="8"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <SendButton
          name={formData.name}
          subject={formData.subject}
          message={formData.message}
          disabled={!isEnabled}
        />
      </form>
    </section>
  );
};

export default ContactView;
