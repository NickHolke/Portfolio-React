import React from 'react';
import {
  landingPage,
  svgTitle,
  svgSubtitle,
  link
} from './landingPage.module.scss';
import { ReactComponent as Title } from './title.svg';
import { ReactComponent as Subtitle } from './subtitle.svg';

const LandingPage = () => {
  return (
    <div id="home" className={landingPage}>
      <h1>
        <span>Hi I'm Nick Holke.</span>
        <span> I'm a software engineer.</span>
      </h1>
      <Title aria-hidden="true" role="presentation" className={svgTitle} />
      <Subtitle
        aria-hidden="true"
        role="presentation"
        className={svgSubtitle}
      />

      <a
        className={link}
        href="#about"
        onMouseDown={() =>
          document.documentElement.classList.add('smooth-scroll')
        }
      >
        Learn More
      </a>
    </div>
  );
};

export default LandingPage;
