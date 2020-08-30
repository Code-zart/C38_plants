import React, { useState, useContext } from 'react';
import AppContext from '../../context/AppContext';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from '@material-ui/core';

const LoginSignup = () => {
  const [userExists, setUserExists] = useState(true);

  return (
    <FormControl className={userExists ? 'Login' : 'Signup'}>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">
        We'll never share your email.
      </FormHelperText>
    </FormControl>
  );
};

export default LoginSignup;
