import React from 'react';
import './intro.css';
import bg from "../../assets/alex photo.png";
import btnImg from '../../assets/icons8-hire-me-50.png';
import downloadBtn from '../../assets/downloads.png';




const Intro = () => {
  return (
    <section id= "intro">
   <div className="introContent">
   <span className="hello">Hello,</span>
   <span className="introText">I'm  <span className="introName">Alexander</span><br />Web developer</span>
   <p className="introPara">I am a skilled web developer with experience in creating<br /> visually appealing and user friendly websites.</p>
   <div className='btnContainer'>
   <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anderalex789@gmail.com&su=Hiring Inquiry&body=Hi, I’d like to discuss an opportunity with you."
             target="_blank" rel="noopener noreferrer">
            <button className="btn">
              <img src={btnImg} alt="hire me" className='btnImg' />Hire Me
            </button>
          </a>
          <a href="resume.pdf" download="Alexander_WebDeveloper.pdf">
  <button className="resumeBtn">
    <img src={downloadBtn} alt="resume" className='downloadBtn' />
    My Resume
  </button>
</a>

         </div>
   </div>

   <img src={bg} alt="Profile" className="bg" />
    </section>
    
  )
}

export default Intro;
