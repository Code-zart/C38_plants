import React from 'react';
import './App.css';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppBody from './pages/AppBody/AppBody';
import UserProfile from './pages/UserProfile/UserProfile';
import Header from './components/Header/Header';

const App = () => {
  return (
    <AppContextProvider>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AppBody} />
          <Route exact path="/profile" component={UserProfile} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
