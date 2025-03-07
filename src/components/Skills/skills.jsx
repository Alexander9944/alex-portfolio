
import './skills.css';
import restapi from '../../assets/Rest-API-Large-1024x808.png';
import css from '../../assets/icons8-css-96.png';
import js from '../../assets/icons8-javascript-96.png';
import react from '../../assets/icons8-react-80.png';
import node from '../../assets/icons8-nodejs-96.png';
import mongodb from '../../assets/icons8-mongo-db-96.png';
import github from '../../assets/icons8-github-logo-94.png';
import npm from '../../assets/icons8-npm-96.png';   
import html from '../../assets/icons8-html-logo-96.png';
import express from '../../assets/icons8-express-js-96.png';
import bootstrap from '../../assets/icons8-bootstrap-96.png'; 
import jquery from '../../assets/icons8-jquery-100.png';
import postgresql from '../../assets/icons8-postgresql-96.png';
import wordpress from '../../assets/icons8-wordpress-96.png';



const Skills = () => {
  return (
    <div>
    <section id='skills'>
        <span className="skillTitle">Skills</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user friendly websites.I have strong understanding of design and a keen eye for detail.I am profecient in HTML, CSS,Javascript and React. </span>
    </section>
      <div>
       <img src={restapi} alt="Profile" className="restapi" />
        <img src={js} alt="Profile" className="js" />
        <img src={css} alt="Profile" className="css" />
        <img src={react} alt="Profile" className="react" />
        <img src={node} alt="Profile" className="node" />
        <img src={mongodb} alt="Profile" className="mongodb" />
        <img src={github} alt="Profile" className="github" />
        <img src={npm} alt="Profile" className="npm" />
        <img src={html} alt="Profile" className="html" />
        <img src={express} alt="Profile" className="express" />
        <img src={bootstrap} alt="Profile" className="bootstrap" />
        <img src={jquery} alt="Profile" className="jquery" />
        <img src={postgresql} alt="Profile" className="postgresql" />
        <img src={wordpress} alt="Profile" className="wordpress" />
      </div>
      </div>
  );
}

export default Skills;

