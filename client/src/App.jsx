import React from 'react';
import './App.css';
import { AppContextProvider } from './context/AppContext';

import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Newsfeed from './components/Newsfeed/Newsfeed';
import Sidebar from './components/Sidebar/Sidebar';
        
const App = () => {
  return (

    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AppBody} />
          <Route exact path="/login" component={LoginSignup} />
          <Route exact path="/profile" component={UserProfile} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
   

  );
};

export default App;
