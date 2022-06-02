import React from 'react';
import './Hero.css';
import SmoothScrollArrow from '../SmoothScrollArrow/SmoothScrollArrow';

function Hero() {

  
  return (
    <div className="Hero" id='Hero'>
      <div className='wrapper' >
          <h1>LEADING BUSINESS</h1> 
          <h1>SOMETHING </h1>
          <h1>PARTNER IN CRYPO </h1>
          <h1>CURRENCY MARKET</h1>
          <div className='arrowWrapper'><SmoothScrollArrow scrollTo="MainContent"/></div>
      </div>
    </div>
  );
}

export default Hero;
