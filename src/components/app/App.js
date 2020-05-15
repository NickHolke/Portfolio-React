import React from 'react';
import './App.scss';
import { About, LandingPage, Portfolio, NavBar, Contact } from '../routes';

function App() {
  return (
    <>
      <LandingPage />
      <NavBar />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
