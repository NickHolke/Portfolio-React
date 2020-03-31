import React from 'react';
import './App.scss';
import { About, LandingPage, Portfolio, NavBar, Contact } from '../routes'
import {Helmet} from "react-helmet";
import mediaImage from './media_img.png';

function App() {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nick Holke Portfolio"/>
        <meta property="og:title" content="Nick Holke"/>
        <meta property='og:description' content="An online portfolio."/>
        <meta property="og:image" content={mediaImage}/>
        <meta property="og:url" content="https://www.nickholke.com/"/>
        {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        <link rel="icon" href="./Nick_favicon.png" />
        <title>Nick Holke</title>
      </Helmet>
      <LandingPage />
      <NavBar />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
