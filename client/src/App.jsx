import React from 'react';
import './App.css';
import { AppContextProvider } from './context/AppContext';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppBody from './pages/AppBody/AppBody';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import UserProfile from './pages/UserProfile/UserProfile';
=======
>>>>>>> master

import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Newsfeed from './components/Newsfeed/Newsfeed';
import Sidebar from './components/Sidebar/Sidebar';
        
const App = () => {
  return (
<<<<<<< HEAD
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AppBody} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={UserProfile} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
=======
    <div className="app">
      <Header />
      <div className="app__body"></div>
      <Sidebar />
      <Newsfeed />
      {/* Widgets */}
    </div>
>>>>>>> master
  );
};

export default App;
