import React from 'react';
import { wrapper, content, front, logo, botLogo, bottom, link } from './bottomLink.module.scss';
import classNames from 'classnames';

const bottomLink = ({srcFront, srcTop, alt}) => {
  return (
    <div className={wrapper}>
      {/* <a className={link} href="https://github.com/NickHolke" target="_blank"> */}
        <div className={content}>
          <div className={front}>
            <img className={logo} src={srcFront} alt={alt} />
          </div>
          <div className={bottom}>
            <img className={classNames(logo, botLogo)} src={srcTop} alt={alt} />
          </div>
        </div>
      {/* </a> */}
    </div>
  )
}

export default bottomLink;
