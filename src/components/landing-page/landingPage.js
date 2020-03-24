import React, {useState, useEffect} from 'react';
import { 
  landingPage, 
  topHalf, 
  bottomHalf,
  topText,
  bottomText,
  showPage,
  moveText, 
} from './landingPage.module.scss';
import classNames from 'classnames';

const LandingPage = () => {
  const[topWrapper, setTopWrapper] = useState(topHalf);
  const[botWrapper, setBotWrapper] = useState(bottomHalf);
  const[topTextClass, setTopTextClass] = useState(topText);
  const[botTextClass, setBotTextClass] = useState(bottomText);

  useEffect(()=> {
    setTopWrapper(classNames(topHalf, showPage));
    setBotWrapper(classNames(bottomHalf, showPage));
    setTopTextClass(classNames(topText, moveText));
    setBotTextClass(classNames(bottomText, moveText));
  },[])

  return (
    <div id="home" className={landingPage}>
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