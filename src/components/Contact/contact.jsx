import React, { useRef } from 'react';
import './contact.css';
import facebookIcon from '../../assets/fb bg remvd.png';
import instagramIcon from '../../assets/Instagram1-removebg-preview.png';
import twitterIcon from '../../assets/icons8-twitter-96.png';
import youtubeIcon from '../../assets/icons8-youtube-96.png';
import whatsappIcon from '../../assets/WA-removebg-preview.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

console.log("Sending email...");
    emailjs.sendForm('service_5t2s9a9', 'template_s1ykuq5', form.current, {
        publicKey: 'tUAjynqkigqSuOz8MqszU',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <section id='contactPage'>
        <div id="contact">
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>I am always looking for new opportunities and challenges. Feel free to contact me for any project or collaboration.</span>
            <form className='contactForm'  ref={form} onSubmit={sendEmail}>
                <input className='name' type='text' placeholder='Your Name' name="your_name"/>
                <input className='email' type='email' placeholder='Your Email' name="your_email"/>
                <textarea className='msg' name='Message' rows="5" placeholder='Your message'></textarea>
                <button className='submitBtn' value="send" type="submit">Send</button>
                <div className='links'> 
              
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


                
            </form>


      
    </div>
    </section>
  )
}

export default Contact;
