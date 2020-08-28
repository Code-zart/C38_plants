import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Post from './pages/Post';
import Profile from './pages/Profile';
import NavbarPage from './components/NavbarPage';
import Login from './components/Login';
import Signup from './components/Signup';
import FooterPage from './components/FooterPage';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <NavbarPage />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/api/post" component={Post} />
          <Route exact path="/api/user/profile" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <FooterPage />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
