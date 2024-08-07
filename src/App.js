import React from 'react'
import './App.css';
import Navigation from './components/navigation.jsx'
import BestCar from './components/BestCar.jsx'
import Service from './components/Service.jsx'
import Technologies from './components/Technologies.jsx'
import Trims from './components/Trims.jsx'
import ContactUs from './components/ContactUs.jsx'

function App() {

  return (    
    <div className="App">
      <Navigation/>
      <BestCar />
      <Service/>
      <Technologies />
      <Trims />
      <ContactUs />
    </div>
  );
}

export default App;
