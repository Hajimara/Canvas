import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

class App extends Component {
  render(){
   return (
     <>
     <Switch>
       <Route component={HomePage} path={'/'} exact></Route>
     </Switch>
     </>
   ) 
  }
}

export default App;
