import React, {useState} from 'react';
import { 
  wrapper, 
  siteImage, 
  infoWrapper, 
  title, 
  moveText, 
  showClass, 
  icon, 
  iconsWrapper,
} from './project.module.scss';

const Project = ({ project, show, delay, videoHandler }) => {
  const [showText, setShowText] = useState(false);

  let wrapperClass = show ? [wrapper, showClass].join(' ') : wrapper;
  let iconsClass = showText ? [iconsWrapper, moveText].join(' ') : iconsWrapper;
  let titleClass = showText ? [title, moveText].join(' ') : title;

  return (
    <div 
      className={wrapperClass} 
      style={{transitionDelay: delay}} 
      onMouseOver={()=>setShowText(true)} 
      onMouseLeave={()=>setShowText(false)}
    >
      <img className={siteImage} src={project.img} alt='project-img'/>
      <div className={infoWrapper}>
        <p className={titleClass}>{project.title}</p>
        <div className={iconsClass}>
          <img className={icon} src='media/youtube.svg' alt='video' onClick={()=>videoHandler(project.video)}/>
          <img className={icon} src='media/github.svg' alt='github'/>
        </div>
      </div>
      
    </div>
  )
};

export default Project;