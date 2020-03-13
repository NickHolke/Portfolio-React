import React from 'react';
import { 
  graphWrapper,
  show,
} from './graph.module.scss';
import { useInView } from 'react-intersection-observer';
import { Bar } from '../routes';

const Graph = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
  });

  if (inView) {
    entry.target.classList.add(show)
  }

  return (
    <div ref={ref} className={graphWrapper}>
      <Bar width='90%' delay='900ms' name='REACT'/>
      <Bar width='90%' delay='1000ms' name='JAVASCRIPT'/>
      <Bar width='80%' delay='1100ms' name='NATIVE'/>
      <Bar width='80%' delay='1200ms' name='CSS'/>
      <Bar width='80%' delay='1300ms' name='HTML'/>
      <Bar width='75%' delay='1400ms' name='NODE'/>
      <Bar width='70%' delay='1500ms' name='MySQL'/>
      <Bar width='70%' delay='1600ms' name='Mongo'/>
    </div>
  );
}

export default Graph;