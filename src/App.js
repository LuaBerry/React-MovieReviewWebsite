import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './routes/About';
import Home from './routes/Home'
import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
      </Routes>
    </HashRouter>
  )
}

export default App;