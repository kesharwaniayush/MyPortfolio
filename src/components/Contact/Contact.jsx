import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCode, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://myportfolio-gjct.onrender.com/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="contact-container">
      {/* Message Form */}
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="traffic-dot red" />
          <span className="traffic-dot yellow" />
          <span className="traffic-dot green" />
          <span className="filename">send_message.form</span>
        </div>
        <div className="terminal-body">
          <p className="command-line">$ compose --new-message</p>
          <h2>SEND_MESSAGE</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group-row">
              <div className="input-field">
                <p className="command-line">$ input --name</p>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Ayush Kesharwani" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field">
                <p className="command-line">$ input --email</p>
                <input 
                  type="email" 
                  name="email"
                  placeholder="kesharwaniayush1207@gmail.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-field full">
              <p className="command-line">$ input --message</p>
              <textarea 
                name="message"
                placeholder="your_message_here..." 
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button 
              type="submit" 
              className="send-button"
              disabled={loading}
            >
              <FaPaperPlane /> {loading ? 'Sending...' : './send_message'}
            </button>

            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>

      {/* Contact Info */}
      <div className="side-panel">
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="traffic-dot red" />
            <span className="traffic-dot yellow" />
            <span className="traffic-dot green" />
            <span className="filename">contact_info.json</span>
          </div>
          <div className="terminal-body">
            <p className="command-line">$ cat contact_methods</p>
            <div className="info-box"><FaEnvelope className="info-icon" /><span><strong>EMAIL</strong><br />kesharwaniayush1207@gmail.com</span></div>
            <div className="info-box"><FaPhoneAlt className="info-icon" /><span><strong>PHONE</strong><br />+91 9588430618</span></div>
            <div className="info-box"><FaMapMarkerAlt className="info-icon" /><span><strong>LOCATION</strong><br />Pune, Maharashtra</span></div>
          </div>
        </div>

        {/* Social Links */}
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="traffic-dot red" />
            <span className="traffic-dot yellow" />
            <span className="traffic-dot green" />
            <span className="filename">social_links.sh</span>
          </div>
          <div className="terminal-body">
            <p className="command-line">$ ls social_profiles/</p>
            <a className="info-box" href="https://github.com/kesharwaniayush" target="_blank" rel="noreferrer">
              <FaGithub className="info-icon" /><span><strong>GitHub</strong><br />@kesharwaniayush — <span className="right">40+ repos</span></span>
            </a>
            <a className="info-box" href="https://www.linkedin.com/in/ayushkesharwani1207/" target="_blank" rel="noreferrer">
              <FaLinkedin className="info-icon" /><span><strong>LinkedIn</strong><br />Ayush Kesharwani — <span className="right">Connect</span></span>
            </a>
            <a className="info-box" href="https://leetcode.com/u/1207ayush/" target="_blank" rel="noreferrer">
              <FaCode className="info-icon" /><span><strong>LeetCode</strong><br />@1207ayush — <span className="right">500+ solved</span></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
