import React from 'react';
import styles from './landingPage.module.scss';

const LandingPage = () => {

  return (
    <div className={styles.landingPage}>
      <div className={styles.topHalf}>
        <h1>Hello I'm Nick Holke.</h1>
      </div>
      <div className={styles.bottomHalf}>
        <h1>I'm a software engineer.</h1>
        V
      </div>
    </div>
  )
}

export default LandingPage;