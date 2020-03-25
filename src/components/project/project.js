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
  subTitle,
} from './project.module.scss';
import classNames from 'classnames';
import youtubeIcon from './youtube.svg';
import githubIcon from './github.svg';

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
        <div className={titleClass}>
          <p>{project.title}</p>
          <p className={subTitle}>{project.subTitle}</p>
        </div>
        <div className={iconsClass}>
          <img className={icon} src={youtubeIcon} alt='video' onClick={()=>videoHandler(project.video)}/>
          <a href={project.link} target="_blank">
            <img className={icon} src={githubIcon} alt='github'/>
          </a>
        </div>
      </div>
      
    </div>
  )
};

export default Project;