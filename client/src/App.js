import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';


import Players from './components/Players/Players';


function App() {


  return (
    <React.Fragment>
      <Route exact path={"/"} component={Navbar} />
      <Route exact path="/" component={Home} />
      <Route path={"/players"} component={Players} />
    </React.Fragment>
  );
}

export default App;
