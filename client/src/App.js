import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./pages/Auth";
import Gamepage from './pages/Gamepage';
import Leaderboard from './pages/Leaderboard/index';
import Contact from './pages/Contact/index';

class App extends Component {

  render() {
    return (
      
      <Router>
        <>
        <Route exact path="/" render={(props) => <Auth {...props} action="login"/>} />
        <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
        <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
        <Route exact path="/game" component={Gamepage} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/contact" component={Contact} />

        </>
      </Router>
    
      

    );
  }
}

export default App;
