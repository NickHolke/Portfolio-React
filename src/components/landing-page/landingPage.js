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
import classNames from 'classnames';

const LandingPage = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  })

  let topWrapper = classNames(topHalf, {[showPage]: inView});
  let botWrapper = classNames(bottomHalf, {[showPage]: inView});
  let topTextClass = classNames(topText, {[moveText]: inView});
  let botTextClass = classNames(bottomText, {[moveText]: inView});

  return (
    <div id="home" ref={ref} className={landingPage}>
      <div className={topWrapper}>
        <h1 className={topTextClass}>Hello I'm Nick Holke.</h1>
      </div>
      <div className={botWrapper}>
        <h1 className={botTextClass}>I'm a software engineer.</h1>
        V
      </div>
    </div>
  )
}

export default LandingPage;