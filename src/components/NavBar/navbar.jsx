import React from 'react';
import './navbar.css';
import {useState}from 'react';
import logo from '../../assets/laptop logo.png';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/icons8-hamburger.gif';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  return (
    
  <nav className="navbar">
<img src={logo} alt="logo" className='logo'/>
 <div className="desktopMenu">
  <Link  activeClass="active" to='intro' spy={true} offset={-100}  duration={500} className="desktopMenuListItem" smooth={true}>Home</Link>
  <Link activeClass="active" to='skills' spy={true} offset={-50}  duration={500}  className="desktopMenuListItem" smooth={true}>About</Link>
  <Link activeClass="active" to='works' spy={true} offset={-55}  duration={500}  className="desktopMenuListItem" smooth={true}>Portfolio</Link>
  

 </div>
 <Link
  to="contactPage"
  spy={true}
  smooth={true}
  offset={-100} /* Adjust to prevent navbar overlap */
  duration={500}
  className="desktopMenuBtn"
  onClick={() => setShowMenu(false)}
>
  <img src={contactImg} alt="" className="desktopMenuImg" />
  Contact Me
</Link>

 <img src={menu} alt="logo" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
 <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
  <Link to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
  <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
  <Link to="works" spy={true} smooth={true} offset={-55} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
</div>

 </nav>

    
  )
}

export default Navbar;
