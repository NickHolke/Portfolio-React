import React from 'react';
import ReactDOM from 'react-dom';
import { background, iframe, fixedContainer, iframeContainer } from './videoPortal.module.scss';  

const VideoPortal = ({ video, setShowVideo }) => {
  return ReactDOM.createPortal(
    <>
      <div className={fixedContainer}>
            <div className={iframeContainer}>
              <iframe 
                className={iframe}
                title="video-demo"
                src={video} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
      </div>
      <div className={background} onClick={()=>setShowVideo(false)}></div>
    </>,
    document.body
  )
}

export default VideoPortal;