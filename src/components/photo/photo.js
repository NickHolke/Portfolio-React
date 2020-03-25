import React, { useState, useEffect } from 'react';
import {
  wrapper,
  textWrapper,
  show,
  cartoon
} from './photo.module.scss';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import nickCartoon from './nick_cartoon.png';

const Photo = () => {
  const [ref, inView] = useInView({});
  const [wrapperClass, setWrapperClass] = useState(wrapper);

  useEffect(()=> {
    if (inView) {
      setWrapperClass(classNames(wrapper, show));
    }
  }, [inView])
  
  return (
    <div ref={ref} className={wrapperClass}>
      <img className={cartoon} src={nickCartoon} alt="no pic"></img>
      <div className={textWrapper}>
        I'm a Full-Stack Developer in the Bay Area with a penchant for pixel perfect Front-Ends.
        Outside programming, I love soccer and stand up.
      </div>
    </div>
  )
}

export default Photo;