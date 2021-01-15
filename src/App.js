import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './pages/searchPage';
import Navbar from './components/Navbar';
import Home from './pages'
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'
import TrainerPage from './pages/trainerPage'
import SignUpTrainer from './pages/signuptrainer'
import SignUpTrainee from './pages/signuptrainee';
import HomePage from './pages/homePage';



function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/find-trainer" component={SearchPage} exact/>
          <Route path="/find-trainer/:id"  component={TrainerPage} exact/>
          <Route path="/signup/signup-trainer" component={SignUpTrainer} exact/>
          <Route path="/signup/signup-trainee" component={SignUpTrainee} exact/>
          <Route path="/home" component={HomePage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
