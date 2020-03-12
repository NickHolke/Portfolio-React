import React from 'react';
import { 
  aboutSection, 
  contentWrapper, 
  title, 
  wrapper, 
  photoWrapper, 
  skillsWrapper
} from './about.module.scss';

const LandingPage = () => (
  <div id="about-section" className={aboutSection}>
    <div className={contentWrapper}>
      <div className={title}>
        <h2>About me</h2>
      </div>
      <div className={wrapper}>
        <div className={photoWrapper}>
          photo goes here
        </div>
        <div className={skillsWrapper}>
          skills go here
        </div>
      </div>
    </div>
  </div>
)

export default LandingPage;