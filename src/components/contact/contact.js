import React, { useState } from 'react';
import styles from './contact.module.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Name'
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter Email'
      />
      <input 
        type="text" 
        value={subject} 
        onChange={(e) => setSubject(e.target.value)}
        placeholder='Enter Subject'
      />
      <textarea
        type="textarea" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Enter Message'
      />
    </form>
  )
}

export default Contact;