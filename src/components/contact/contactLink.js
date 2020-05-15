import React from 'react';
import { contactLink, contactIcon } from './contact.module.scss';

const ContactLink = React.memo(({ icon: Icon, text, ...restProps }) => (
  <a className={contactLink} {...restProps}>
    {Icon && <div className={contactIcon}>{<Icon />}</div>}
    <span>{text}</span>
  </a>
));

export default ContactLink;
