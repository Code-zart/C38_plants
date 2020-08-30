import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Newsfeed from './components/Newsfeed/Newsfeed';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  // const [serverMessage, setServerMessage] = useState('');

  // const fetchDemoData = () => {
  //   fetch('/api/demo')
  //     .then((response) => response.json())
  //     .then((data) => setServerMessage(data.message));
  // };

  // useEffect(fetchDemoData, []);

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
