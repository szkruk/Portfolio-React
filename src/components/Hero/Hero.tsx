import React from 'react';
import './Hero.css';
import AboutMe from './AboutMe/AboutMe';

const Hero = () => {
  return (
    <>
      <AboutMe />
      <div className="image-of-me">
        <img src="../public/images/logo.png" alt="Szymon Kruk" id="me" />
      </div>
    </>
  );
};

export default Hero;
