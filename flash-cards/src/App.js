import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Landing from "./pages/landing"
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
