import React, { useState, useEffect, useRef } from 'react';
import {
  title,
  portfolioSection,
  projectsWrapper,
  content,
  mobileInfo
} from './portfolio.module.scss';
import { data } from './projectsData';
import Project from '../project/project';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

const Portfolio = React.memo(() => {
  const [projects] = useState(data);
  const [contentVisible, setContentVisible] = useState(false);
  const hasAnimated = useRef(false);
  const [ref, inView] = useInView({
    threshold: 0.3
  });

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      setContentVisible(true);
    }
  }, [inView]);

  return (
    <section id="portfolio" className="scroll-target">
      <div
        id="portfolio-section"
        className={classNames(portfolioSection, {
          visible: contentVisible
        })}
      >
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
    </section>
  );
});

const initialDelay = 200;
const delay = 150;

const Projects = React.memo(({ projects }) => {
  return projects.map((project, index) => (
    <Project
      key={index}
      project={project}
      delay={initialDelay + delay * index}
    />
  ));
});

export default Portfolio;
