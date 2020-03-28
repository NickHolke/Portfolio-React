import React from 'react';
import { wrapper, close } from './successMessage.module.scss';

const SuccessMessage = ({setShowSuccess}) => (
  <div className={wrapper}>
    Your message was successfully sent!
    <span className={close} onClick={()=>setShowSuccess(false)}>x</span>
  </div>
)

export default SuccessMessage;