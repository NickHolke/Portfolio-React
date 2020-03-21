import React, {useState, useEffect } from 'react';
import { 
  graphWrapper,
  show,
} from './graph.module.scss';
import { useInView } from 'react-intersection-observer';
import { Bar } from '../routes';

const Graph = () => {
  const [showBars, setShowBars] = useState(false);
  const [ref, inView, entry] = useInView();

  useEffect(() => {
    if (inView) {
      setShowBars(true);
    }
  }, [inView])

  let wrapperClass = showBars ? [graphWrapper, show].join(' ') : graphWrapper;

  return (
    <div ref={ref} className={wrapperClass}>
      <Bar width='90%' delay='900ms' name='REACT' show={showBars}/>
      <Bar width='90%' delay='1000ms' name='JAVASCRIPT' show={showBars}/>
      <Bar width='80%' delay='1100ms' name='NATIVE' show={showBars}/>
      <Bar width='80%' delay='1200ms' name='PING-PONG' show={showBars}/>
      <Bar width='80%' delay='1200ms' name='CSS' show={showBars}/>
      <Bar width='80%' delay='1300ms' name='HTML' show={showBars}/>
      <Bar width='75%' delay='1400ms' name='NODE' show={showBars}/>
      <Bar width='70%' delay='1500ms' name='MySQL' show={showBars}/>
      <Bar width='70%' delay='1600ms' name='Mongo' show={showBars}/>
    </div>
  );
}

export default Graph;