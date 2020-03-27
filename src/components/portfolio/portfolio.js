import React, { useState, useEffect } from 'react';
import {title, portfolioSection, projectsWrapper, content} from './portfolio.module.scss';
import {data} from './mockData';
import Project from '../project/project';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const [projects,] = useState(data);
  const [showProjects, setShowProjects] = useState(false);
  const [ref, inView,] = useInView();

  useEffect(()=> {
    if (inView) {
      setShowProjects(true)
    }
  }, [inView])

  return (
    <div id="portfolio-section" className={portfolioSection}>
      <div className={content}>
        <div className={title}>
          <h2>Portfolio</h2>
        </div>
        <div ref={ref} className={projectsWrapper}>
          {projects.map((project, idx) => <Project show={showProjects} key={idx} project={project} delay={100 * idx + 'ms'} />)}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;