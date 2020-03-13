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
import { Bar } from '../routes';

const Graph = () => {
  // const [ref, inView, entry] = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // });

  // if (inView) {
  //   entry.target.children[1].children[0].classList.add(barGrow);
  // }

  return (
    <div className={graphWrapper}>
      <Bar width='90%' delay='200ms' name='REACT'/>
      <Bar width='90%' delay='300ms' name='JAVASCRIPT'/>
      <Bar width='80%' delay='400ms' name='NATIVE'/>
      <Bar width='80%' delay='500ms' name='CSS'/>
      <Bar width='80%' delay='600ms' name='HTML'/>
      <Bar width='75%' delay='700ms' name='NODE'/>
      <Bar width='70%' delay='800ms' name='MySQL'/>
      <Bar width='70%' delay='900ms' name='Mongo'/>
    </div>
  );
}

export default Graph;