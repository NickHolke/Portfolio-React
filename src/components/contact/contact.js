import React, { useState } from 'react';
import {
  formWrapper,
  wrapper,
  title,
  titleText,
  input,
  submit,
  linksWrapper,
  links,
  contentWrapper,
  content
} from './contact.module.scss';
import * as emailjs from 'emailjs-com';
import { SuccessMessage, ErrorMessage } from '../routes';
import ContactLink from './contactLink';
import { ReactComponent as Phone } from './phone.svg';
import { ReactComponent as Email } from './email.svg';
import { ReactComponent as Github } from './github.svg';
import { ReactComponent as LinkedIn } from './linkedin.svg';

const Contact = React.memo(() => {
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
  };
  const submitHandler = e => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      setShowError(true);
    } else {
      let templateParams = {
        from_name: email,
        to_name: 'nickholke@gmail.com',
        subject: subject,
        message_html: message
      };

      emailjs.send(
        'gmail',
        'template_z4G7eMor',
        templateParams,
        'user_h4jBBfPVyh1aKLrWcGfuV'
      );

      resetHooks();
      setShowSuccess(true);
      setShowError(false);
    }
  };
  return (
    <section id="contact" className="scroll-target">
      <div id="contact-section" className={wrapper}>
        <div className={contentWrapper}>
          <div className={title}>
            <h2 className={titleText}>Contact</h2>
          </div>
          <div className={content}>
            <form className={formWrapper} onSubmit={submitHandler}>
              <input
                className={input}
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter Name"
              />
              <input
                className={input}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
              <input
                className={input}
                type="text"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                placeholder="Enter Subject"
              />
              <textarea
                className={input}
                type="textarea"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Enter Message"
              />
              {showSuccess && (
                <SuccessMessage setShowSuccess={setShowSuccess} />
              )}
              {showError && <ErrorMessage setShowError={setShowError} />}
              <input className={submit} type="submit" value="Submit" />
            </form>
            <div className={linksWrapper}>
              <h3>Get in Touch</h3>
              <div className={links}>
                <ContactLink
                  text="nickholke@gmail.com"
                  icon={Email}
                  href="mailto:nickholke@gmail.com"
                />
                <ContactLink
                  text="(925) 353-5053"
                  icon={Phone}
                  href="tel:9253535053"
                />
                <ContactLink
                  text="See my work on GitHub"
                  icon={Github}
                  href="https://github.com/NickHolke"
                />
                <ContactLink
                  text="Connect with me on LinkedIn"
                  icon={LinkedIn}
                  href="https://www.linkedin.com/in/nick-holke"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
