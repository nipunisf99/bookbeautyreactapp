import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Outlet } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
