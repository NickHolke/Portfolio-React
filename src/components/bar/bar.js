import React from 'react';
import { bar, barBackground, barGrow, wrapper, text } from './bar.module.scss';

const Bar = ({ width, delay, name, show }) => {
  let barClass = show ? [bar, barGrow].join(' ') : bar;

  return (
    <div className={wrapper}>
      <div className={barBackground}>
      <span className={text}>{name}</span>
        <div className={barClass} style={{width: width, transitionDelay: delay}}></div>
      </div>
    </div>
  )
}

export default Bar;