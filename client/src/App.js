import React from 'react';

import './App.css';
import ScoreBoard from "./Components/ScoreBoard"
import Nav from "./Components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <ScoreBoard />
    </div>
  );
}

export default App;
