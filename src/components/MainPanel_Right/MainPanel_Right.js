import React from 'react';
import './MainPanel_Right.css';
import SmoothScrollArrow from '../SmoothScrollArrow/SmoothScrollArrow';
import img from '../../media/img3.svg';
import {forwardRef} from 'react'

const MainPanel_Right = forwardRef((prop, ref) => {

  return (
    <div ref={ref} className="MainPanel_Right" id='MainPanel_Right_One'>
          <div className='border'></div>
          <h1>The Fastest.</h1>
          <div className='wrapper_1'>
            <p>Flawlessly designed algorythms to get things done faster than others.</p>
            <button><span class="text">FINDOUT MORE</span></button>
          </div>
          <div className='wrapper_v2'>
            <img className ='backgroundImg' src={img}/>
          </div>
          <SmoothScrollArrow scrollTo={prop.scrollTo}/>        
    </div>
  );
});

export default MainPanel_Right;
