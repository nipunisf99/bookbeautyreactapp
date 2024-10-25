import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Outlet } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import Navbar2 from './Components/Navbar2';
import Home from './Components/Home';




function App() {
  return (
    <Router>

      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </Router>
  );
}

export default App;
