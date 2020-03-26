import React, { useState, useEffect } from 'react';
import {title, portfolioSection, projectsWrapper, videoWrapper, bgColor, content} from './portfolio.module.scss';
import {data} from './mockData';
import Project from '../project/project';
import { useInView } from 'react-intersection-observer';

const Portfolio = (props) => {
  const [projects, setProjects] = useState(data);
  const [showProjects, setShowProjects] = useState(false);
  const [ref, inView,] = useInView();
  const [video, setVideo] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  const videoHandler = (video) => {
    setVideo(video);
    setShowVideo(true);
  }

  useEffect(()=> {
    if (inView) {
      setShowProjects(true)
    }
  }, [inView])

  return (
    <div id="portfolio-section" className={portfolioSection}>
      <div className={content}>
        {showVideo &&
        <>
          {/* <div className={videoWrapper}> */}
            <iframe 
              title="video-demo"
              src={video} 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen />
          {/* </div> */}
        <div className={bgColor} onClick={()=>setShowVideo(false)}>
        </div>
        </>
        }
        <div className={title}>
          <h2>Portfolio</h2>
        </div>
        <div ref={ref} className={projectsWrapper}>
          {projects.map((project, idx) => <Project videoHandler={videoHandler} show={showProjects} key={idx} project={project} delay={100 * idx + 'ms'} />)}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;