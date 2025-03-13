import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/laptop logo.png';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/icons8-hamburger.gif';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      {/* Animated Logo with Continuous Motion */}
      <motion.img 
        src={logo} 
        alt="logo" 
        className='logo'
        initial={{ opacity: 0, y: -20 }} 
        animate={{
          opacity: 1,
          y: [0, -10, 0], // Floating effect
          rotate: [0, 2, -2, 0] // Subtle rotation effect
        }}
        transition={{ 
          duration: 3, // Slow movement
          repeat: Infinity, // Loop infinitely
          ease: "easeInOut" 
        }}
        whileHover={{ scale: 1.1 }} // Slight scaling on hover
      />

      <div className="desktopMenu">
        <Link activeClass="active" to='intro' spy={true} offset={-100} duration={500} className="desktopMenuListItem" smooth={true}>Home</Link>
        <Link activeClass="active" to='skills' spy={true} offset={-50} duration={500} className="desktopMenuListItem" smooth={true}>About</Link>
        <Link activeClass="active" to='works' spy={true} offset={-55} duration={500} className="desktopMenuListItem" smooth={true}>Portfolio</Link>
      </div>
      
      <motion.div 
        className="contact-info" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <a href="tel:+919944314849" className="contact-item">
          <Phone size={20} /> +91 99443 14849
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anderalex789@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-item">
          <Mail size={20} /> anderalex789@gmail.com
        </a>
      </motion.div>
      
      <Link to="contactPage" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuBtn" onClick={() => setShowMenu(false)}>
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </Link>
      
      <img src={menu} alt="menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link to="works" spy={true} smooth={true} offset={-55} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
      </div>
    </nav>
  );
};

export default Navbar; 