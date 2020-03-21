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
import classNames from 'classnames';

const Project = ({ project, show, delay, videoHandler }) => {
  const [showText, setShowText] = useState(false);

  let wrapperClass = classNames(wrapper, {[showClass]: show});
  let iconsClass = classNames(iconsWrapper, {[moveText]: showText});
  let titleClass = classNames(title, {[moveText]: showText});

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