import React from 'react';
import { graphWrapper } from './graph.module.scss';
import { Bar } from '../routes';

const skills = [
  { name: 'Javascript', percent: 0.95 },
  { name: 'React', percent: 0.95 },
  { name: 'HTML/CSS', percent: 0.9 },
  { name: 'Ping-Pong', percent: 0.88 },
  { name: 'Node', percent: 0.85 },
  { name: 'Postgres', percent: 0.84 },
  { name: 'React Native', percent: 0.83 },
  { name: 'MySQL', percent: 0.82 },
  { name: 'Mongo', percent: 0.82 },
  { name: 'AWS', percent: 0.78 }
];

const initialDelay = 200;
const delay = 130;

const Graph = React.memo(() => (
  <div className={graphWrapper}>
    {skills.map((skill, index) => (
      <Bar key={skill.name} delay={initialDelay + delay * index} {...skill} />
    ))}
  </div>
));

export default Graph;
