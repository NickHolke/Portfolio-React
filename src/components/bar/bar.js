import React from 'react';
import { bar, barBackground, barGrow, wrapper, text } from './bar.module.scss';
import classNames from 'classnames';

const Bar = ({ width, delay, name, show }) => (
  <div className={wrapper}>
    <div className={barBackground}>
    <span className={text}>{name}</span>
      <div className={classNames(bar, {[barGrow]: show})} style={{width: width, transitionDelay: delay}}></div>
    </div>
  </div>
)

export default Bar;