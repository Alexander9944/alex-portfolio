import './footer.css';
import { useEffect } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  useEffect(() => {
    const mybutton = document.getElementById("scrollToTopBtn");

    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    mybutton.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }, []);

  return (
    <footer className='footer'>
      <p>© 2024 Alexander. All rights reserved.</p>

      {/* Contact Information */}
      <div className="contact-info">
        <p><FaPhone /> +91 9944314849</p>
        <p><FaEnvelope /> <a href="anderalex789@gmail.com">Alexander</a></p>
      </div>

      {/* Scroll to Top Button */}
      <button id="scrollToTopBtn" className="scrollToTopBtn">↑ Top</button>
    </footer>
  );
}

export default Footer;
