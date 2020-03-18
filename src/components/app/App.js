import React from 'react';
import './App.scss';
import { About, LandingPage, Portfolio, NavBar } from '../routes'

function App() {
  return (
    <>
      <LandingPage />
      <NavBar />
      <About />
      <Portfolio />
    </>
  );
}

export default App;
