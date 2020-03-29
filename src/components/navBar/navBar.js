import React from 'react';
import { 
  name,
  links,
  link,
} from './navBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <div className={name}>NICK HOLKE</div>
      <div className={links}>
        <a href="#about-section" className={link}>ABOUT</a>
        <a href="#portfolio-section" className={link}>PORTFOLIO</a>
        <a href="#contact-section" className={link}>CONTACT</a>
      </div>
    </nav>

  )
}

export default NavBar;