import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import './App.css';


import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';

const stdlib = loadStdlib('ALGO');

console.log("Test console");


function App() {
  return (
    <div className="App">
        <Home />          
    </div>
  );
}

export default App;
