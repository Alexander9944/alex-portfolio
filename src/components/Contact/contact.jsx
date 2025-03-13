import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';
import facebookIcon from '../../assets/fb bg remvd.png';
import instagramIcon from '../../assets/Instagram1-removebg-preview.png';
import twitterIcon from '../../assets/icons8-twitter-96.png';
import youtubeIcon from '../../assets/icons8-youtube-96.png';
import whatsappIcon from '../../assets/WA-removebg-preview.png';
import linkedinIcon from '../../assets/linkedin bg rmvd.png';
import githubIcon from '../../assets/gthub logo.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.data.success) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Try again later.");
    }
  };

  return (
    <section id='contactPage'>
      <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>I am always looking for new opportunities and challenges. Feel free to contact me for any project or collaboration.</span>
        <form className='contactForm' onSubmit={sendEmail}>
          <input className='name' type='text' placeholder='Your Name' name="name" value={formData.name} onChange={handleChange} required />
          <input className='email' type='email' placeholder='Your Email' name="email" value={formData.email} onChange={handleChange} required />
          <textarea className='msg' name='message' rows="5" placeholder='Your message' value={formData.message} onChange={handleChange} required></textarea>
          <button className='submitBtn' type="submit">Send</button>
        </form>
        <p>{status}</p>

        <div className='links'> 
          <a href="https://github.com/Alexander9944" target="_blank" rel="noopener noreferrer">
            <img className='link' src={githubIcon} alt='GitHub'/>
          </a>
          <a href="https://www.linkedin.com/in/alexander-abraham-5814251b7" target="_blank" rel="noopener noreferrer">
            <img className='link' src={linkedinIcon} alt='LinkedIn'/>
          </a>
          <a href="https://www.facebook.com/Alexander Abraham" target="_blank" rel="noopener noreferrer">
            <img className='link' src={facebookIcon} alt='Facebook'/>
          </a>
          <a href="https://twitter.com/@anderalex789" target="_blank" rel="noopener noreferrer">
            <img className='link' src={twitterIcon} alt='Twitter'/>
          </a>
          <a href="https://www.youtube.com/channel/UCofwPm9LNYlPasLa3D1D4lw" target="_blank" rel="noopener noreferrer">
            <img className='link' src={youtubeIcon} alt='YouTube'/>
          </a>
          <a href="https://wa.me/919944314849" target="_blank" rel="noopener noreferrer">
            <img className='link' src={whatsappIcon} alt='WhatsApp'/>
          </a>
          <a href="https://www.instagram.com/direct/t/alexander.1388" target="_blank" rel="noopener noreferrer">
            <img className='link' src={instagramIcon} alt='Instagram'/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
