import React, { useState, useEffect } from 'react';
import {title, portfolioSection, projectsWrapper, content, mobileInfo,} from './portfolio.module.scss';
import {data} from './projectsData';
import Project from '../project/project';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

const Portfolio = () => {
  const [projects,] = useState(data);
  const [showProjects, setShowProjects] = useState(false);
  const [ref, inView,] = useInView({});

  useEffect(()=> {
    if (inView) {
      setShowProjects(true)
    }
  }, [inView])

  return (
    <div id="portfolio-section" className={classNames(portfolioSection, {
      visible: showProjects
    })}>
      <div className={content}>
        <div className={title}>
          <h2>Portfolio</h2>
        </div>
        <p className={mobileInfo}>(tap photo for details)</p>
        <div ref={ref} className={projectsWrapper}>
          <Projects projects={projects} />
        </div>
      </div>
    </div>
  )
}

const Projects = React.memo(({projects})=> {
  return projects.map((project, idx) => (
    <Project 
      key={idx}
      project={project}
      delay={100 * idx + 'ms'}
    />
  ));
});


export default Portfolio;