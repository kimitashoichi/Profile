import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HeaderComponent } from './components/util/Header';
import { Top } from './components/top-section/index';
import { CarrierSection } from './components/carrier-section/index';
import { SkillMapComponent } from './components/skill-map-section/index';
import { BlogComponent } from './components/blog-section/index';
import { ContactComponent } from './components/contact-section/index';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Top />
      <CarrierSection />
      <SkillMapComponent />
      <BlogComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
