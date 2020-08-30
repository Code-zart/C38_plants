import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  StylesProvider,
  Container,
  Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

const Login = () => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/login', formData).then((res) => {});
  };
  return (
    <StylesProvider injectFirst>
      <Container className="Container" component="main" maxWidth="xs">
        <div className="something">
          <Avatar className="Avatar" variant="rounded">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form className="somethingelse" noValidate>
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
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </StylesProvider>
  );
};

export default Login;
