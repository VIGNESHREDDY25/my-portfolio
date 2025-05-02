import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS credentials
const EMAILJS_PUBLIC_KEY = "MqsTB1O7IlASIG4XR";
const EMAILJS_SERVICE_ID = "service_mwdevz9";
const EMAILJS_TEMPLATE_ID = "template_j6w0o54";

// Initialize EmailJS with your public key
emailjs.init(EMAILJS_PUBLIC_KEY);

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current
      );

      console.log('Success:', result.text);
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      form.current.reset();

      // Show success message for 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);

    } catch (error) {
      console.error('Error:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again or email directly.'
      });
    }
  };

  return (
    <div id="contact" className="section contact-section">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:vmolugu@gmu.edu">vmolugu@gmu.edu</a>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+15712531321">+1 (571) 253-1321</a>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/vigneshreddym/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a
                href="https://github.com/VIGNESHREDDY25"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
              >
                <i className="fab fa-github"></i>
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                minLength="2"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="reply_to"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="5"
                minLength="10"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`submit-btn ${status.submitting ? 'submitting' : ''}`}
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
            {status.submitted && (
              <div className="success-message">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status.error && (
              <div className="error-message">
                {status.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
