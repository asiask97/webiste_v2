import './Card_Element.css';
import { useState, useRef} from 'react';
import useOnScreen  from '../../hooks/useOnScreen';

function Card_Element(props) {
    const visibleContainerRef = useRef();
    const [visibleContainer] = useOnScreen({threshold: 1 }, visibleContainerRef)

return (
    <div className="Card_Element" ref={visibleContainerRef}>
        <div className="spinner-box">
            <div style={{border:`3px solid ${props.colour}`}} className={visibleContainer ? 'configure-border-1 configure-border-1-active' : 'configure-border-1'}><h3>{props.num}</h3></div>  
            <div className={visibleContainer ? 'configure-border-2 configure-border-2-active' : 'configure-border-2'}></div> 
        </div>
        <h2 className={visibleContainer ? 'activeH2' : 'inactiveH2'}>Focused Mission</h2>
        <p className={visibleContainer ? 'activeP' : 'inactiveP'}>Sed maximus imperdiet libero ut fringilla. Integer nulla leo.</p>
    </div>
  );
}

export default Card_Element;