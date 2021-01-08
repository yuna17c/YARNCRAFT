import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NewAdd from './components/pages/New';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/new' component={NewAdd}/>
        <Route path='/products' component={Products}/>
        <Route path='/sign-up' component={SignUp}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
