import React, { useCallback } from 'react';
import { name, links, link } from './navBar.module.scss';

const navItems = [
  { title: 'About', href: '#about' },
  { title: 'Portfolio', href: '#portfolio' },
  { title: 'Contact', href: '#contact' }
];

const NavBar = React.memo(() => {
  const addSmoothScroll = useCallback(() => {
    document.documentElement.classList.add('smooth-scroll');
  }, []);

  return (
    <nav>
      <div className={name}>Nick Holke</div>
      <div className={links}>
        {navItems.map(({ title, href }) => (
          <a
            key={title}
            href={href}
            className={link}
            onMouseDown={addSmoothScroll}
          >
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
});

export default NavBar;
