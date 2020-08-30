import React from 'react';
import './App.css';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppBody from './pages/AppBody/AppBody';
import {Login, Signup} from './pages/Login-Signup';

import UserProfile from './pages/UserProfile/UserProfile';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AppBody} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component {Signup} />
          <Route exact path="/profile" component={UserProfile} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
