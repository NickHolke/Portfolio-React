import React from 'react';
import { 
  landingPage, 
  topHalf, 
  bottomHalf,
  topText,
  bottomText,
  showPage,
  moveText, 
} from './landingPage.module.scss';
import { useInView } from 'react-intersection-observer';

const LandingPage = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
  })

  if (inView) {
    for (let i = 0; i < 2; i++) {
      let child = entry.target.children[i];
      child.classList.add(showPage);
      child.children[0].classList.add(moveText);
    }
  }

  return (
    <div ref={ref} className={landingPage}>
      <div className={topHalf}>
        <h1 className={topText}>Hello I'm Nick Holke.</h1>
      </div>
      <div className={bottomHalf}>
        <h1 className={bottomText}>I'm a software engineer.</h1>
        V
      </div>
    </div>
  )
}

export default LandingPage;