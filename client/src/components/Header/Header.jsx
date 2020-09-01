import React, { useContext, useState } from 'react';
import './Header.css';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Logo from '../../images/Logo.png';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { StylesProvider, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { session } from 'passport';

const Header = () => {
  const [formData, setFormData] = useState(null);
  const [modalContent, setModalContent] = useState(null);

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

  return (
    <div className="header">
      <div className="header__left">
        <img className="Logo" src={Logo} alt="Logo" />
      </div>
      <div className="header__input">
        <SearchIcon />
        <input placeholder="Search GrapeVine" type="text" />
      </div>
      <div>
        <StylesProvider injectFirst>
          <div className="header__right">
            <div>
              <Button
                className="Button"
                variant="contained"
                onClick={toggleLoginForm}
              >
                Login
              </Button>
              <Dialog
                className="ModalStyle"
                open={modalContent}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">
                  GrapeVine Login
                </DialogTitle>
                <DialogContent>
                  {AuthForm && <AuthForm onSubmit={closeModal} />}
                </DialogContent>
                <DialogActions>
                  {modalContent === 'login' ? (
                    <Button onClick={toggleSignUp}>
                      Don't have an account? Sign up!
                    </Button>
                  ) : (
                    <Button onClick={toggleLoginForm}>
                      Already have an account? Log in!
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
        </StylesProvider>
      </div>
    </div>
  );
};

export default Header;
