import React from 'react';
import { 
  aboutSection, 
  title, 
  wrapper, 
  photoWrapper, 
  skillsWrapper,
} from './about.module.scss';
import { Graph, Photo } from '../routes';

const LandingPage = () => (
  <div id="about-section" className={aboutSection}>
      <div className={title}>
          <h2>About me</h2>
      </div>
      <div className={wrapper}>
        <div className={photoWrapper}>
          <Photo />
        </div>
        <div className={skillsWrapper}>
          <Graph />
        </div>
      </div>
  </div>
)

export default LandingPage;