import React from 'react';
import { wrapper, close, image } from './errorMessage.module.scss';
import icon from './error.svg';

const ErrorMessage = ({setShowError}) => (
  <div className={wrapper}>
    <img className={image} src={icon} alt="warning"/>
    'Name', 'Email', and 'Message' can't be empty.
    <span className={close} onClick={()=>setShowError(false)}>x</span>
  </div>
)

export default ErrorMessage;