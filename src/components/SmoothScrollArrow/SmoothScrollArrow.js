import React from 'react';
import arrow from '../../media/arrow.svg'

function SmoothScrollArrow(props) {
  
    const handleClickNav = () =>{
      document.getElementById(props.scrollTo).scrollIntoView( { behavior: "smooth" })
    }
  
    return (
      <div className="SmoothScrollArrow">
          <img className = "ScrollArrow" src={arrow} alt="arrow pointing down" onClick={handleClickNav}/>
      </div>
    );
  }
  
  export default SmoothScrollArrow;