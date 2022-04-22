import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Create from './components/Create/Create';


function App() {
  return (
    <React.Fragment>
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={Create} />
    </React.Fragment>
  );
}

export default App;
