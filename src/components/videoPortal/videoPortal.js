import React from 'react';
import ReactDOM from 'react-dom';
import { background, iframe, container } from './videoPortal.module.scss';  

const VideoPortal = ({ video }) => {
  return ReactDOM.createPortal(
    <>
    
          <iframe 
            className={iframe}
            title="video-demo"
            src={video} 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
      <div className={background}>
      </div>
    </>,
    document.body
  )
}

export default VideoPortal;