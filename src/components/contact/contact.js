import React, { useState } from 'react';
import { formWrapper, wrapper, title, titleText, input, submit, linksWrapper, content} from './contact.module.scss';
import * as emailjs from 'emailjs-com';
import { BottomLink, SuccessMessage, ErrorMessage } from '../routes';
import githubWhite from './github.svg';
import githubBlue from './github_blue.svg';
import linkedinWhite from './linkedin_white_.svg';
import linkedinBlue from './linkedin_blue_.svg';

const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const resetHooks = () => {
    setName('');
    setSubject('');
    setEmail('');
    setMessage('');
  }
  const submitHandler = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      setShowError(true);
    } else {
      let templateParams = {
        from_name: email,
        to_name: 'nickholke@gmail.com',
        subject: subject,
        message_html: message,
      }
  
      emailjs.send(
        'gmail',
        'template_z4G7eMor',
        templateParams,
        'user_h4jBBfPVyh1aKLrWcGfuV',
      )
  
      resetHooks();
      setShowSuccess(true);
      setShowError(false);
    }
  }
  return (
    <div id="contact-section" className={wrapper}>
      <div className={content}>
        <div className={title}>
          <h2 className={titleText}>Contact</h2>
        </div>
        <form className={formWrapper} onSubmit={submitHandler}>
          <input
            className={input} 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Name'
          />
          <input
            className={input}  
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
          />
          <input
            className={input}  
            type="text" 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)}
            placeholder='Enter Subject'
          />
          <textarea
            className={input} 
            type="textarea" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Enter Message'
          />
          {showSuccess && <SuccessMessage setShowSuccess={setShowSuccess}/>}
          {showError && <ErrorMessage setShowError={setShowError}/>}
          <input className={submit} type='submit' value='SUBMIT'/>
        </form>
        <div className={linksWrapper}>
          <BottomLink 
            srcFront={githubWhite}
            srcTop={githubBlue} 
            alt='github'
            href='https://github.com/NickHolke'/>
          <BottomLink 
            srcFront={linkedinWhite}
            srcTop={linkedinBlue}
            alt='linkedin'
            href='https://www.linkedin.com/in/nick-holke/'/>
        </div>
      </div>
    </div>
  )
}

export default Contact;