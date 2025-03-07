import React from 'react';
import './intro.css';
import bg from "../../assets/alex photo.png";
import btnImg from '../../assets/icons8-hire-me-50.png';
import downloadBtn from '../../assets/downloads.png';
import { Link } from 'react-scroll';



const Intro = () => {
  return (
    <section id= "intro">
   <div className="introContent">
   <span className="hello">Hello,</span>
   <span className="introText">I'm  <span className="introName">Alexander</span><br />Web developer</span>
   <p className="introPara">I am a skilled web developer with experience in creating<br /> visually appealing and user friendly websites.</p>
   <div className='btnContainer'>
        <Link><button className="btn"><img src={btnImg} alt="hire me" className='btnImg' />Hire Me</button></Link>
         <Link><button className="resumeBtn"><img src={downloadBtn} alt="resume" className='downloadBtn' />My Resume</button></Link>
         </div>
   </div>

   <img src={bg} alt="Profile" className="bg" />
    </section>
    
  )
}

export default Intro;
