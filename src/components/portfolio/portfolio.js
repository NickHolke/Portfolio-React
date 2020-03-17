import React, { useState } from 'react';
import {title, portfolioSection, projectsWrapper} from './portfolio.module.scss';
import {data} from './mockData';
import Project from '../project/project';

const Portfolio = (props) => {
  const [projects, setProjects] = useState(data);

  return (
    <div id="portfolio-section" className={portfolioSection}>
      <div className={title}>
        <h2>Portfolio</h2>
      </div>
      <div className={projectsWrapper}>
        {projects.map((project, idx) => <Project key={idx} project={project} />)}
      </div>
    </div>
  )
}

export default Portfolio;