import './Card_Element.css';
import { useState } from 'react';


function Card_Element(props) {
    const [clicked, setClicked] = useState(false);
    function showText(){
        setClicked(!clicked);
    }

return (
    <div className="Card_Element" onMouseEnter={showText} onMouseLeave={showText}>
        <div className="spinner-box">
            <div style={{border:`3px solid ${props.colour}`}} className={clicked ? 'configure-border-1 configure-border-1-active' : 'configure-border-1'}></div>  
            <div className={clicked ? 'configure-border-2 configure-border-2-active' : 'configure-border-2'}></div> 
        </div>
        <h2 className={clicked ? 'activeH2' : 'inactiveH2'}>Focused Mission</h2>
        <p className={clicked ? 'activeP' : 'inactiveP'}>Sed maximus imperdiet libero ut fringilla. Integer nulla leo.</p>
    </div>
  );
}

export default Card_Element;