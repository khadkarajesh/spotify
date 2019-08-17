import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SongsBrowse from './pages/Browse'
import RedirectHandler from './components/RedirectHandler'

function App() {
  return (
    <Router>
      <Switch>
          <Route path='/' exact match component={SongsBrowse}/>
          <Route path='/callback/' exact match component={RedirectHandler} />
      </Switch>
    </Router>
  );
}

export default App;
