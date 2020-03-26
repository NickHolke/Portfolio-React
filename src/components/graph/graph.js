import React, {useState, useEffect } from 'react';
import { 
  graphWrapper,
  show,
} from './graph.module.scss';
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

  let wrapperClass = classNames(graphWrapper, {[show]: showBars});

  return (
    <div ref={ref} className={wrapperClass}>
      <Bar width='95%' delay='900ms' name='JAVASCRIPT' show={showBars}/>
      <Bar width='95%' delay='1000ms' name='REACT' show={showBars}/>
      <Bar width='90%' delay='1100ms' name='HTML/CSS' show={showBars}/>
      <Bar width='100%' delay='1200ms' name='PING-PONG' show={showBars}/>
      <Bar width='80%' delay='1300ms' name='NODE' show={showBars}/>
      <Bar width='78%' delay='1400ms' name='POSTGRES' show={showBars}/>
      <Bar width='78%' delay='1500ms' name='REACT NATIVE' show={showBars}/>
      <Bar width='75%' delay='1600ms' name='MYSQL' show={showBars}/>
      <Bar width='75%' delay='1700ms' name='MONGO' show={showBars}/>
      <Bar width='75%' delay='1800ms' name='AWS' show={showBars}/>
    </div>
  );
}

export default Graph;