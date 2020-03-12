import React from 'react';
import { 
  name,
  links,
  link
} from './navBar.module.scss';

const NavBar = () => (
  <nav>
    <div className={name}>NICK HOLKE</div>
    <div className={links}>
      <a href="#jump-here" className={link}>HOME</a>
      <a href="#about-section" className={link}>ABOUT</a>
      <a href="#jump-here" className={link}>PORTFOLIO</a>
      <a href="#jump-here" className={link}>CONTACT</a>
    </div>
  </nav>
)

export default NavBar;