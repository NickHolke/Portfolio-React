import React from 'react';
import './App.scss';
// import LandingPage from './components/landing-page/landingPage';
import { About, LandingPage } from './components/routes'

function App() {
  return (
    <>
      <LandingPage />
      <About />
    </>
  );
}

export default App;
