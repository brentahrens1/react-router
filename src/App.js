import React from 'react';
import './App.css';

import Nav from './components/Nav';
import About from './components/About';
import Employees from './components/Employees';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/employees" exact component={Employees}/>
          <Route path="/employees/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
