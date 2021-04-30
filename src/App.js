import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GameFeature from './components/pages/GameFeature';
import Products from './components/pages/Awareness';
import Download from './components/pages/Download';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/fypwebsite' component={Home} />
        <Route path='/gamefeature' component={GameFeature} />
        <Route path='/awareness' component={Products} />
        <Route path='/download' component={Download} />
      </Switch>
    </Router>
  );
}

export default App;
