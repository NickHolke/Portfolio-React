import React from 'react';
import { wrapper, siteImage, infoWrapper, link, title, moveText } from './project.module.scss';

const Project = ({ project }) => {
  const mouseEnter = (e) => {
    let children = e.target.children;
    if (children.length === 0) {
      children = e.target.parentElement.children;
    }
    if (children.length) {
      for (let i = 0; i < children.length; i++) {
        children[i].classList.add(moveText);
      }
    } 
  }

  const mouseLeave = (e) => {
    let children = e.target.children;
    // console.log(children)
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove(moveText);
    }
  }
  
  return (
    <div className={wrapper}>
      <img className={siteImage} src={project.img} alt='project-img'/>
      <div className={infoWrapper} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <p className={title}>{project.title}</p>
        <a className={link} href={project.link}>link here</a>
      </div>
    </div>
  )
};

export default Project;