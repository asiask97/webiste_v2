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
    //    <div ref={visibleContainerRef} className="MainContent">

    const colors = {one:'#C5E6A6', two:'#C3BEF7', three:'#6294C0', four:'#93A9DC'}
  return (
    <div ref={visibleContainerRef} className="MainContent">
      <h1>Some Text abut being the gartest leader in  Europe</h1>
      <Card_Element colour={colors.one}/>
      <Card_Element colour={colors.two}/>
      <Card_Element colour={colors.three}/>
      <Card_Element colour={colors.four}/>
      <RadialBackground style={visibleContainer} />
        {/*<RadialBackground style={visibleContainer} />
        <MainPanel_Right  scrollTo ='MainPanel_Left_Two'/>
        <MainPanel_Right  scrollTo ='MainPanel_Left_'/>
        <MainPanel_Right scrollTo ='MainPanel_Left_Two'/>
        <MainPanel_Right scrollTo ='MainPanel_Left_Two'/>
        <MainPanel_Right scrollTo ='MainPanel_Left_Two'/>
        <MainPanel_Right scrollTo ='MainPanel_Left_Two'/>*/}

    </div>
  );
}

export default MainContent;
