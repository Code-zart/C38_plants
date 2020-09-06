import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  Button,
  TextField,
  StylesProvider,
  Container,
  Typography
} from '@material-ui/core';
import login from '../images/Logo.png';

const Login = ({ onSubmit }) => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/users/login', formData)
      .then((res) => {
        sessionStorage.setItem('User', res.data);
        setCurrentUser(res.data);
        history.push('/');
      })
      .catch((error) => alert('check form inputs!'))
      .finally(() => onSubmit());
  };
  return (
    <StylesProvider injectFirst>
      <Container className="Container" component="main" maxWidth="xs">
        <div className="something">
          <div>
            <img
              style={{
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginBottom: '20px',
                width: '180px',
                height: '180px'
              }}
              src={login}
              alt="login"
            />
          </div>
          <Typography component="h1" variant="h5" align="center">
            Log In
          </Typography>
          <form className="somethingelse" noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="another"
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </StylesProvider>
  );
};

export default Login;
