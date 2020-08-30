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
    <div className="app">
      <Header />
      <div className="app__body"></div>
      <Sidebar />
      <Newsfeed />
      {/* Widgets */}
    </div>
  );
};

export default App;
