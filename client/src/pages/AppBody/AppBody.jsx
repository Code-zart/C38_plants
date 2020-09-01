import React from 'react';
import Header from '../../components/Header/Header';
import Newsfeed from '../../components/Newsfeed/Newsfeed';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widgets from '../../components/Widgets/Widgets';

const AppBody = () => {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Newsfeed />
        <Widgets />
      </div>
    </div>
  );
};

export default AppBody;
