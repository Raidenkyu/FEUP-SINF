import React from 'react';
import { Router } from "@reach/router";
import Home from './components/home/Home.js';

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default App;
