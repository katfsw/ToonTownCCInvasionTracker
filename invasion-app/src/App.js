import React from 'react';
import InvasionTracker from './components/InvasionTracker';
import './App.css';
import Footer from './components/Footer'
import Nav from './components/Nav'
import Groups from './components/Groups'
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Nav/>
      
      <Switch>
        <Route exact path='/' component={InvasionTracker}/>
      </Switch>
      <Switch>
        <Route exact path='/groups' component={Groups}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
