import React, { Component } from 'react';
import './App.css';
import SiteBar from './home/NavBar';
import Auth from './auth/Auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Splash from './home/Splash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  componentWillMount() {
    const token = localStorage.getItem('token')
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token }); 
    }
  }

  logout = () => {
    this.setState({
      sessionToken: '',
    });
    localStorage.clear();
  }

  prtectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
          <Switch>
            <Route path="/" exact>
              < Splash token= {this.state.sessionToken}/>
            </Route>
        </Switch>
      );
    } else {
      return(
        <Route path="/auth">
          <Auth setToken={this.setSessionState}/>
        </Route>
      )
    }
  }

  render() {
    return (
      <Router>
        <div>
          <SiteBar logout={this.logout}/>
            {this.prtectedViews()}
        </div>
      </ Router>
    );
  }
}

export default App;
