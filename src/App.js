import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SongsBrowse from './pages/Browse'
import RedirectHandler from './components/RedirectHandler'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact match component={Home} />
        <Route path='/browse' exact match component={SongsBrowse} />
        <Route path='/callback/' exact match component={RedirectHandler} />
      </Switch>
    </Router>
  );
}

export default App;
