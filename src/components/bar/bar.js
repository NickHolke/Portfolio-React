import React from 'react';
import { bar, barBackground, barGrow, wrapper, text } from './bar.module.scss';
import classNames from 'classnames';

const Bar = ({ width, delay, name, show }) => {
  let barClass = classNames(bar, {[barGrow]: show});

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