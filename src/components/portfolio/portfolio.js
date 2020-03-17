import React, { useState } from 'react';
import {title, portfolioSection, projects} from './portfolio.module.scss';
// import Project from '../project/project';

const Portfolio = (props) => {
  const [projects, setProjects] = useState([{title: 'Project 1', img: 'imageURL', link: 'linkHere'}]);

  return (
    <div id="portfolio-section" className={portfolioSection}>
      <div className={title}>
        <h2>Portfolio</h2>
      </div>
      <div className={projects}>
        {/* {projects.map((project, idx) => <Project key={idx} project={project} />)} */}
        {projects.map((project) => <div>{project.title}</div>)}
      </div>
    </div>
  )
}

export default Portfolio;