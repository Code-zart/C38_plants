import React from 'react';
//import './Header.css';
import { Logo } from '../assets/images/Logo.png';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  return (
    <div className="header">
      <div className="header_middle"></div>
      <div className="header_left">
        <img src={Logo} alt="Logo" />
        <div className="header_input">
          <SearchIcon />
        </div>
      </div>
      <div className="header_right"></div>
    </div>
  );
};

export default Header;
