import React from 'react';
import InvasionTracker from './components/InvasionTracker';
import './App.css';
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {

  return (
    <div className="App">
      <Nav/>
      <InvasionTracker/>
      <Footer/>
    </div>
  );
}

export default App;
