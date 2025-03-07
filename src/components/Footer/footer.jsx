import './footer.css';
import { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    // Get the button
    const mybutton = document.getElementById("scrollToTopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    // When the user clicks on the button, scroll to the top of the document
    mybutton.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }, []);

  return (
    <footer className='footer'>
      <p>© Copyright reserved. 2024 Alexander. All rights reserved.</p>
      
      {/* Scroll to Top Button */}
      <button id="scrollToTopBtn" className="scrollToTopBtn">↑ Top</button>
    </footer>
  );
}

export default Footer;
