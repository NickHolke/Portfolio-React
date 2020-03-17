import React from 'react';
import './App.scss';
import { About, LandingPage, Portfolio } from '../routes'

function App() {
  return (
    <>
      <LandingPage />
      <About />
      <Portfolio />
    </>
  );
}

export default App;
