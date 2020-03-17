import React, { useState } from 'react';
import { wrapper, siteImage, infoWrapper, link } from './project.module.scss';

const Project = ({ project }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div 
      className={wrapper} 
      onMouseEnter={()=>setShowInfo(!showInfo)}
      onMouseLeave={()=> setShowInfo(!showInfo)}
    >
      <img className={siteImage} src={project.img} alt='project-img'/>
      {showInfo &&
        <div className={infoWrapper}>
          <p>{project.title}</p>
          <a className={link} href={project.link}>link here</a>
        </div> 
      }
    </div>
  )
};

export default Project;