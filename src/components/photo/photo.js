import React from 'react';
import {
  wrapper,
  // textWrapper,
  // show,
  cartoon
} from './photo.module.scss';
import nickCartoon from './nick_cartoon.png';

const Photo = React.memo(() => (
  <div className={wrapper}>
    <img className={cartoon} src={nickCartoon} alt="Nick Holke"></img>
  </div>
));

export default Photo;
