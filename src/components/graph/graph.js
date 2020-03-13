import React from 'react';
import { 
  graphWrapper,
  barWrapper,
  category,
  barBackground,
  bar,
  bar1,
  barGrow, 
} from './graph.module.scss';
import cx from 'classnames';
import { useInView } from 'react-intersection-observer';

const Graph = () => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  });

  if (inView) {
    entry.target.children[1].children[0].classList.add(barGrow);
  }

  return (
    <div className={graphWrapper}>
      <div ref={ref} className={barWrapper}>
        {/* {console.log('Inview: ' + inView, 'entry: ' + entry.target)} */}
        <div className={category}>
          REACT
        </div>
        <div className={barBackground}>
          <div className={ cx(bar, bar1)}></div>
        </div>
      </div>
    </div>
  );
}

export default Graph;