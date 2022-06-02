import './RadialBackground.css';

function RadialBackground(props) {

return (
    <div className="RadialBackground">
        <div className ={props.style ? 'radialScroll show ' : 'radialScroll noShow' } ></div>
    </div>
  );
}

export default RadialBackground;
