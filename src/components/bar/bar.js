import React from 'react';
import { bar, barBackground, wrapper, text } from './bar.module.scss';

const Bar = React.memo(({ percent, delay, name }) => (
  <div className={wrapper}>
    <div className={barBackground}>
      <span className={text} style={{ transitionDelay: `${delay + 50}ms` }}>
        {name}
      </span>
      <div
        className={bar}
        style={{
          width: `${Math.round(percent * 100)}%`,
          transitionDelay: `${delay}ms`
        }}
      ></div>
    </div>
  </div>
));

export default Bar;
