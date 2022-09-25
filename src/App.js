import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';

const stdlib = loadStdlib('ALGO');

console.log("Test console");
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
 dddddXXX  ZZ III
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn cccReact  dddd
        </a>
      </header>
    </div>
  );
}

export default App;
