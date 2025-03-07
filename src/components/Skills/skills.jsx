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
  const icons = [restapi, js, css, react, node, mongodb, github, npm, html, express, bootstrap, jquery, postgresql, wordpress];

  return (
    <div className="skills-container">
      <section id="skills">
        <span className="skillTitle">Skills</span>
        <span className="skillDesc">
          I am a skilled and passionate web designer with experience in creating <br></br>visually appealing and user-friendly websites. 
          I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript, and React.
        </span>
      </section>

      <div className="skills-slider">
        <div className="skills-slide-track">
          {icons.concat(icons).map((icon, index) => (
            <img key={index} src={icon} alt="Skill" className="icon" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
