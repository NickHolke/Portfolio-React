import React, {useState, useEffect } from 'react';
import { graphWrapper,show,} from './graph.module.scss';
import { useInView } from 'react-intersection-observer';
import { Bar } from '../routes';
import classNames from 'classnames';

const Graph = () => {
  const [showBars, setShowBars] = useState(false);
  const [ref, inView,] = useInView();

  useEffect(() => {
    if (inView) {
      setShowBars(true);
    }
  }, [inView])

  return (
    <div ref={ref} className={classNames(graphWrapper, {[show]: showBars})}>
      <Bar width='95%' delay='800ms' name='JAVASCRIPT' show={showBars}/>
      <Bar width='95%' delay='880ms' name='REACT' show={showBars}/>
      <Bar width='90%' delay='960ms' name='HTML/CSS' show={showBars}/>
      <Bar width='88%' delay='1040ms' name='PING-PONG' show={showBars}/>
      <Bar width='80%' delay='1120ms' name='NODE' show={showBars}/>
      <Bar width='78%' delay='1200ms' name='POSTGRES' show={showBars}/>
      <Bar width='78%' delay='1280ms' name='REACT NATIVE' show={showBars}/>
      <Bar width='75%' delay='1360ms' name='MYSQL' show={showBars}/>
      <Bar width='75%' delay='1440ms' name='MONGO' show={showBars}/>
      <Bar width='73%' delay='1520ms' name='AWS' show={showBars}/>
    </div>
  );
}

export default Graph;