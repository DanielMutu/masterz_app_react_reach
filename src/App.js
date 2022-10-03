import React from 'react';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from './components/Menu';
import Cards from './components/Cards';
import Donate from './components/Donate';
//import { loadStdlib } from '@reach-sh/stdlib';

//const stdlib = loadStdlib('ALGO');
//console.log("Test console");


function App() {
  return (
    <div className="App">
      <Menu></Menu>
        <Router>
            <Routes>
              <Route exact path="/" element={<Cards />} />
              <Route exact path="/Donate" element={<Donate />} />
            </Routes>
          </Router>         
    </div>
  );
}

export default App;
