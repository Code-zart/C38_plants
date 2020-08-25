require('./db/config');
const express = require('express'),
  path = require('path'),
  passport = require('./middleware/authentication/'),
  cookieParser = require('cookie-parser'),
  fileUpload = require('express-fileupload'),
  usersRouter = require('./routes/secure/users'),
  questionsRouter = require('./routes/secure/questions'),
  answersRouter = require('./routes/secure/answers'),
  openRouter = require('./routes/open/index');

const app = express();

//Middleware
app.use(express.json());

// Unauthenticated routes
app.use('/', openRouter);

// Serve any static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Middleware for request.cookies object
app.use(cookieParser());

// Any authentication middleware and related routing would be here.
app.use('/api/users', usersRouter);
app.use('api/questions', questionsRouter);
app.use('/api/questions/:qId/answers', answersRouter);

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
