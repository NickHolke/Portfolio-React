import React from 'react';
import { landingPage, topHalf, bottomHalf } from './landingPage.module.scss';

const LandingPage = () => (
  <div className={landingPage}>
    <div className={topHalf}>
      <h1>Hello I'm Nick Holke.</h1>
    </div>
    <div className={bottomHalf}>
      <h1>I'm a software engineer.</h1>
      V
    </div>
  </div>
)

export default LandingPage;