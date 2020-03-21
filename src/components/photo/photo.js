import React from 'react';
import {
  wrapper,
  textWrapper,
  show,
} from './photo.module.scss';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

const Photo = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  })

  let wrapperClass = classNames(wrapper, {[show]: inView});
  
  return (
    <div ref={ref} className={wrapperClass}>
      <img src="media/linkedIn_pic.jpeg" alt="no pic"></img>
      <div className={textWrapper}>
        I'm a Full-Stack Developer in the Bay Area with a penchant for pixel perfect Front-Ends.
        Outside making a clean user experience, I enjoy soccer and stand-up.  
      </div>
    </div>
  )
}

export default Photo;