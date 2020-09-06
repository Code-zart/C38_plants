import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Newsfeed from '../../components/Newsfeed/Newsfeed';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widgets from '../../components/Widget/Widget';
import '../../pages/AppBody/AppBody.css'

const AppBody = () => {
  return (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Newsfeed />
            <Widgets />
          </div>
        </div>
  );
};

export default AppBody;
