//import MainPanel_Right from '../MainPanel_Right/MainPanel_Right';
//import RadialBackground from '../RadialBackground/RadialBackground';
import RadialBackground from '../RadialBackground/RadialBackground';

import Card_Element from "../Card_Element/Card_Element";
import './MainContent.css';

import useOnScreen from '../../hooks/useOnScreen';
import React, { useRef } from 'react';


function MainContent() {
    const visibleContainerRef = useRef();
    const [visibleContainer] = useOnScreen({threshold: 0.5}, visibleContainerRef)

    const colors = {one:'#C5E6A6', two:'#C3BEF7', three:'#6294C0', four:'#93A9DC'}
    const headings = {one:'Volumes', two:'Access', three:'High Speed', four:'Low Latency'}
    const bodyText = {one:'Monthly trading volumes exceeding $1B globally.',two:'Access to top volume rebates on major exchanges.', three:'High speed network infrastructure.', four:'Low latency order execution.'}
  return (
    <div ref={visibleContainerRef} className="MainContent" id='MainContent'>
      <div className='left_half'>
        <h1>What makes us stand out in crypto market?</h1>
      </div>
      <div className='right_half'>
        <Card_Element colour={colors.one} num='1' heading={headings.one} bodyText={bodyText.one}/>
        <Card_Element colour={colors.two} num='2'heading={headings.two} bodyText={bodyText.two}/>
        <Card_Element colour={colors.three} num='3'heading={headings.three} bodyText={bodyText.three}/>
        <Card_Element colour={colors.four} num='4'heading={headings.four} bodyText={bodyText.four}/>
      </div>
      <RadialBackground style={visibleContainer} />
    </div>
  );
}

export default MainContent;
