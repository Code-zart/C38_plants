import React from 'react';
import './App.css';
import { AppContextProvider } from './context/AppContext';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppBody from './pages/AppBody/AppBody';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppBody from './pages/AppBody/AppBody';
import LoginSignup from './pages/LoginSignup/LoginSignup';
>>>>>>> master
import UserProfile from './pages/UserProfile/UserProfile';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AppBody} />
<<<<<<< HEAD
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
=======
          <Route exact path="/login" component={LoginSignup} />
>>>>>>> master
          <Route exact path="/profile" component={UserProfile} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
