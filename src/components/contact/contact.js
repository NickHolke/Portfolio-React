import React, { useState } from 'react';
import { formWrapper, wrapper, title, titleText, input, submit, linksWrapper } from './contact.module.scss';
import * as emailjs from 'emailjs-com';
import { BottomLink } from '../routes';

const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const resetHooks = () => {
    setName('');
    setSubject('');
    setEmail('');
    setMessage('');
  }
  const submitHandler = (e) => {
    e.preventDefault();

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
  }
  return (
    <div id="contact-section" className={wrapper}>
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
        <input className={submit} type='submit' value='SUBMIT'/>
      </form>
      <div className={linksWrapper}>
        <BottomLink srcFront='media/github.svg' srcTop='media/github_blue.svg' alt='github'/>
        <BottomLink srcFront='media/linkedin_white.svg' srcTop='media/linkedin_blue.svg' alt='linkedin'/>
      </div>
    </div>
  )
}

export default Contact;