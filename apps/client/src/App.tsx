import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HeaderComponent } from './components/util/Header';
import { Top } from './components/top-section/index';
import { CarrierSection } from './components/carrier-section/index';
import { SkillMapComponent } from './components/skill-map-section/index';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Top />
      <CarrierSection />
      <SkillMapComponent />
    </div>
  );
}

export default App;
