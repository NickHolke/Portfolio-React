import React, { useEffect, useRef, useState } from 'react';
import {
  aboutSection,
  title,
  wrapper,
  skillsWrapper
} from './about.module.scss';
import { Graph, Photo } from '../routes';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

const LandingPage = () => {
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
    <section id="about" className="scroll-target">
      <div
        ref={ref}
        id="about-section"
        className={classNames(aboutSection, {
          visible: contentVisible
        })}
      >
        <div className={title}>
          <h2>About me</h2>
          <p>
            I'm a Full-Stack Developer in the Bay Area with a penchant for pixel
            perfect front-ends. Outside programming, I love soccer and stand up.
          </p>
        </div>
        <div className={wrapper}>
          <Photo />
          <div className={skillsWrapper}>
            <Graph />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
