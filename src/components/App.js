import React from 'react';
//Routing
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
//Styles
import '../styles/main.scss';
//Components
import Login from './login/Login';
import Home from './home/Home';
import Header from './header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default withRouter(connect(null)(App));
