import React from 'react';
//import './Header.css';
//import Logo from '../assets/images/Logo.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://www.canva.com/design/DAEGULHOvo0/3Py1TBYkJHRnJ-blDi_4uA/view?utm_content=DAEGULHOvo0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          alt="Logo"
        />
      </div>
      <div className="header_input">
        <SearchIcon />
        <input type="text" />
      </div>
      <div className="header_middle">
        <div className="header_option">
          <HomeIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Header;
