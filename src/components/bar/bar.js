import React from 'react';
import { bar, barBackground, barGrow, wrapper, text } from './bar.module.scss';
import { useInView } from 'react-intersection-observer';

const Bar = ({ width, delay, name }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
  });

  if (inView) {
    entry.target.classList.add(barGrow);
  }

  return (
    <div className={wrapper}>
      <div className={barBackground}>
      <span className={text}>{name}</span>
        <div ref={ref} className={bar} style={{width: width, transitionDelay: delay}}></div>
        
      </div>
    </div>
  )
}

export default Bar;