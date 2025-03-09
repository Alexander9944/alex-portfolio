import './works.css';
import dicegame from '../../assets/dice game.png';
import tomatoapp from '../../assets/tomato-app.png';
import tindog from '../../assets/tindog.png';
import keeperapp from '../../assets/keeper-app.png';
import emojipedia from '../../assets/emojipedia.png';
import todolist from '../../assets/todolist.png';
import drumkit from '../../assets/drumkit.png';

const Works = () => {
  const projects = [
    { link: 'https://dice-game-alex.netlify.app/', img: dicegame, title: 'Dice Game' },
    { link: 'https://tomato-food-delivery-app-by-alex.netlify.app/', img: tomatoapp, title: 'Tomato App' },
    { link: 'https://tindog-chat-site.netlify.app/', img: tindog, title: 'Tindog' },
    { link: 'https://github.com/yourusername/keeperapp', img: keeperapp, title: 'Keeper App' },
    { link: 'https://github.com/yourusername/emojipedia', img: emojipedia, title: 'Emojipedia' },
    { link: 'https://github.com/yourusername/todolist', img: todolist, title: 'To-Do List' },
    { link: 'https://drumkit-play-site.netlify.app/', img: drumkit, title: 'Drum Kit' },
  ];

  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2><br></br>
      <span className='worksDesc'>
        I take pride in paying attention to the smallest details and making sure that my work is pixel-perfect. 
        I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
      </span>
      <div className='worksImgs'>
        {projects.map((project, index) => (
          <a key={index} href={project.link} target='_blank' rel='noopener noreferrer' className='workItem'>
            <div className='workOverlay'>
              <p className='workText'>This is a short description of {project.title}. It showcases amazing features.</p>
            </div>
            <img className='worksImg' src={project.img} alt={project.title} />
          </a>
        ))}
      </div>
      <button className='worksBtn'>See More</button>
    </section>
  );
}

export default Works;
