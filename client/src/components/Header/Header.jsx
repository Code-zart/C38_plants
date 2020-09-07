import React, { useState, useContext } from 'react';
import './Header.css';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Logo from '../../images/Logo.png';
import { StylesProvider, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';

const Header = () => {
  const [modalContent, setModalContent] = useState(null);
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const AuthForm = {
    login: Login,
    signUp: Signup
  }[modalContent];

  const handleAuthButton = (authType) => {
    setModalContent(authType);
  };

  const toggleLoginForm = () => handleAuthButton('login');
  const toggleSignUp = () => handleAuthButton('signUp');
  const closeModal = () => handleAuthButton(null);
  const toggleLogout = () => {
    axios
      .post('/api/users/logout', { withCredentials: true })
      .then(() => {
        setCurrentUser(null);
        sessionStorage.removeItem('User');
      })
      .catch((error) => console.log('error:', error));
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header__input">
        <SearchIcon />
        <input placeholder="Search" type="text" />
      </div>
      <div>
        <StylesProvider injectFirst>
          {!currentUser ? (
            <div className="header__right">
              <div>
                <Button
                  className="Button"
                  variant="contained"
                  onClick={toggleLoginForm}
                >
                  Login
                </Button>
                <Dialog open={modalContent} aria-labelledby="form-dialog-title">
                  <DialogContent
                    style={{
                      backgroundColor: '#c3cedb'
                    }}
                  >
                    {AuthForm && <AuthForm onSubmit={closeModal} />}
                  </DialogContent>
                  <DialogActions
                    style={{
                      backgroundColor: '#c3cedb'
                    }}
                  >
                    {modalContent === 'login' ? (
                      <Button onClick={toggleSignUp} color="primary">
                        Don't have an account? Sign up
                      </Button>
                    ) : (
                      <Button onClick={toggleLoginForm} color="primary">
                        Already have an account? Log in
                      </Button>
                    )}
                    <Button onClick={closeModal} color="primary">
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              <div>
                <Button
                  className="Button"
                  variant="contained"
                  onClick={toggleSignUp}
                >
                  Sign up
                </Button>
              </div>
            </div>
          ) : (
            <>
              <h4 id="welcomeText">Welcome {currentUser.username} </h4>
              <Button
                id="button"
                className="Button"
                variant="contained"
                onClick={toggleLogout}
              >
                Log out
              </Button>
            </>
          )}
        </StylesProvider>
      </div>
    </div>
  );
};

export default Header;
