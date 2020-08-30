import React from 'react';
import './App.css';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppBody from './pages/AppBody/AppBody';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import UserProfile from './pages/UserProfile/UserProfile';

const App = () => {
  return (
    // <div className="app">
    //   <Header />
    //   <div className="app__body"></div>
    //   <Sidebar />
    //   <Newsfeed />
    //   {/* Widgets */};
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AppBody} />
          <Route exact path="/login" component={LoginSignup} />
          <Route exact path="/profile" component={UserProfile} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
    // </div>
  );
};

export default App;
