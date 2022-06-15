import './App.css';
import Hero from '../Hero/Hero.js';
import NavBar from '../NavBar/NavBar.js';
import MainContent from '../MainContent/MainContent';
import Contact_Us from '../Contact_Us/Contact_Us';
import React from 'react';
import Action_Call from '../Action_Call/Action_Call';

function App() {
  /*useEffect(() => {
    window.scrollTo(0, 0)
  }, [])*/
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <div className='transtion'></div>
      <MainContent/>
      <Action_Call/>
      <Contact_Us/>

    </div>
  );
}

export default App;
