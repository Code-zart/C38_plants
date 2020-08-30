import React, { useContext } from 'react';
import './Header.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { Avatar, StylesProvider, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!currentUser) history.push('/login');
    if (currentUser) {
      axios.post('api/users/logout', currentUser).then((res) => {
        setCurrentUser(null);
        history.push('/login');
      });
    }
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src="" alt="Logo" />
      </div>
      <div className="header__input">
        <SearchIcon />
        <input placeholder="Search GrapeVine" type="text" />
      </div>
      <div className="header__center">
        <div className="header__option">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
      </div>
      <StylesProvider injectFirst>
        <div className="header__right">
          <Button className="Button" variant="contained" onClick={handleLogin}>
            {currentUser ? 'Logout' : 'Login'}
          </Button>
        </div>
      </StylesProvider>
      <div className="header__info">
        <Avatar src="client/src/images/Emi.jpg" />
        <h4>Emelia DoLittle</h4>
      </div>
    </div>
  );
};

export default Header;
