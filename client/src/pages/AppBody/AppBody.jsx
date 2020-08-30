import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Newsfeed from '../../components/Newsfeed/Newsfeed';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widgets from '../../components/Widgets/Widgets';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Switch, Paper } from '@material-ui/core';

const AppBody = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh' }}>
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Newsfeed />
            <Widgets />
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export default AppBody;
