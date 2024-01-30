import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HeaderComponent } from './components/util/Header';
import { Top } from './components/top-section/index';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Top />
    </div>
  );
}

export default App;
