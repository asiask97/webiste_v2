import React from 'react';
import './Hero.css';
import SmoothScrollArrow from '../SmoothScrollArrow/SmoothScrollArrow';

function Hero() {

  //Market making in the crypto currency space since 2020.
  return (
    <div className="Hero" id='Hero'>
      <div className='wrapper' >
          <h1>MARKET MAKING</h1> 
          <h1>IN THE CRYPTO</h1>
          <h1>CURRENCY SPACE</h1>
          <h1>SINCE 2020</h1>
          <div className='arrowWrapper'><SmoothScrollArrow scrollTo="MainContent"/></div>
      </div>
    </div>
  );
}

export default Hero;
