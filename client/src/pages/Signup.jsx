import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import {
  Button,
  TextField,
  Grid,
  StylesProvider,
  Container,
  Typography
} from '@material-ui/core';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import signup from '../images/signup.png';

const Signup = ({ onSubmit }) => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    axios
      .post('/api/users', formData)
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
      <Container component="main" maxWidth="xs">
        <div className="">
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
              src={signup}
              alt="signup"
            />
          </div>
          <Typography component="h1" variant="h5" align="center">
            Sign up
          </Typography>
          <form className="" onSubmit={handleCreateUser} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className=""
              Sign
              Up
            >
              Sign up
            </Button>
          </form>
        </div>
      </Container>
    </StylesProvider>
  );
};

export default Signup;
