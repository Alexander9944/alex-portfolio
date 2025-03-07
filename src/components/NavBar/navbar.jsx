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
  <Link  activeClass="active" to='intro' spy={true} offset={-100}  duration={500} className="desktopMenuListItem" >Home</Link>
  <Link activeClass="active" to='skills' spy={true} offset={-50}  duration={500}  className="desktopMenuListItem" >About</Link>
  <Link activeClass="active" to='works' spy={true} offset={-55}  duration={500}  className="desktopMenuListItem" >Portfolio</Link>
  

 </div>
 <button className="desktopMenuBtn" onClick={()=>{
     document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
 }}>
 <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
 
 <img src={menu} alt="logo" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
 <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
  <Link  activeClass="active"  className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
  <Link activeClass="active"  className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
  <Link  activeClass="active" className="listItem" onClick={()=>setShowMenu(false)} >Portfolio</Link>
 
 </div>
 </nav>

    
  )
}

export default Navbar;
