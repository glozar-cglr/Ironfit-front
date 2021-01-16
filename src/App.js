import React, {Component} from 'react';
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
import {logout} from './services/userWs'
import AppContext from './AppContext';  






class App extends Component {
  state = {
    user : JSON.parse( localStorage.getItem("user")   )  || {},    
  }
  logout = () => {
    const { history } = this.props;
    logout().then(() => {
      localStorage.removeItem("user"); //<--- Es para almacenar localmente 
      this.setState({ user: {} });
      history.push("/login");// esto hace el redirect
    });
  };
  setUser = (user) => {
    this.setState({user})
  }
  render () {
    const {
      state,
      logout,
      setUser
    } = this
    return (
      <AppContext.Provider 
        value={{
          state,
          logout,
          setUser,
        }}
      >
      <Router>
        <Navbar user={state.user} logout={logout}/>
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
      </AppContext.Provider>
    );
  }
}

export default App;
