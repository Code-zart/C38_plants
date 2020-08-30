import React from 'react';
import Header from '../../components/Header/Header';
import Newsfeed from '../../components/Newsfeed/Newsfeed';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widgets from '../../components/Widgets/Widgets';

const AppBody = () => {
  return (
    <div>
      <Header />
      <Newsfeed />
      <Sidebar />
      <Widgets />
    </div>
  );
};

export default AppBody;
