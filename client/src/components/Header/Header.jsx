import React from 'react';
import './Header.css';
//import Logo from '../Logo.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { Avatar, StylesProvider } from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
//import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const Header = () => {
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
          <Button
            className="Button"
            variant="contained"
            onClick={() => {
              alert('clicked');
            }}
          >
            Login
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
