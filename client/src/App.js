import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer';
import logo1 from './images/PowerPong.png';
import logo2 from './images/League.png';


function App() {
  return (
    <div className="container">
      <div className='image-container'>
        <img className="powerpong-logo" src={logo1} alt={"PowerPong"}/>
        <img className="league-logo" src={logo2} alt={"League"}/>
      </div>
      <MainContainer />
    </div>
  );
}

export default App;
