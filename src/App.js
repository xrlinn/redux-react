import React from 'react';
import './App.css';
import Count from './components/count'
import ReduxWithCount from './components/reduxWithCount'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Todolist from './views/todolist'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/reduxWithCount" component={ReduxWithCount} />
        <Route path="/Todolist" component={Todolist} />
      </div>
    </Router>
    
  );
}

export default App;
