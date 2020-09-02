import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Newsfeed from '../../components/Newsfeed/Newsfeed';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widgets from '../../components/Widgets/Widgets';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Switch, Paper } from '@material-ui/core';
import '../../pages/AppBody/AppBody.css';

const AppBody = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    // Do a PUT request to update the user's darkmode preferences
  };
  return (
    <ThemeProvider theme={theme}>
      <Paper id="paper">
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Newsfeed />
            <Widgets />
            <Switch checked={darkMode} onChange={handleDarkMode} />
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export default AppBody;
