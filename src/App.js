import React,{} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ComponentA} />
        <Route exact path="/componentb" component={ComponentB} />
        <Route exaet path="/componentc" component={ComponentC} />
      </Switch>
    </Router>
  );
  }

export default App;
