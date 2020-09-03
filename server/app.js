require('./db/config');
const express = require('express'),
  path = require('path'),
  passport = require('./middleware/authentication/'),
  cookieParser = require('cookie-parser'),
  usersRouter = require('./routes/secure/users'),
  questionsRouter = require('./routes/secure/questions'),
  answersRouter = require('./routes/secure/answers'),
  openRouter = require('./routes/open/index'),
  logger = require('morgan');

const app = express();

//Middleware
app.use(logger('dev')); // log all requests to console
app.use(express.json());

// Unauthenticated routes
app.use('/', openRouter);

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Middleware for request.cookies object
app.use(cookieParser());

// This middleware authenticates all users as being logged in and...
// Gives us access to the req.user object
app.use(
  passport.authenticate('jwt', {
    session: false
  })
);

// Any authentication middleware and related routing would be here.
app.use('/api/users', usersRouter);
app.use('/api/questions', questionsRouter);
app.use('/api/questions/:qId/answers', answersRouter); // should this be the same path as questions?

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
