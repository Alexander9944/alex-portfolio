
import './works.css';
import dicegame from '../../assets/dice game.png'
import tomatoapp from '../../assets/tomato-app.png';
import tindog from '../../assets/tindog.png';
import keeperapp from '../../assets/keeper-app.png';
import emojipedia from '../../assets/emojipedia.png';
import todolist from '../../assets/todolist.png';
import drumkit from '../../assets/drumkit.png';

const Works = () => {
  return (
    
      <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect.I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence.</span>
         <div className='worksImgs'>
            <img className='worksImg' src={dicegame} alt='work1' />
            <img className='worksImg' src={tomatoapp} alt='work2'/>
            <img className='worksImg' src={tindog} alt='work3'/>
            <img className='worksImg' src={keeperapp} alt='work4'/>
            <img className='worksImg' src={emojipedia} alt='work5'/>
            <img className='worksImg' src={todolist} alt='work6'/>
            <img className='worksImg' src={drumkit} alt='work7'/>
         </div>
         <button className='worksBtn'>See More</button>
      </section>
    
  );
}

export default Works;
