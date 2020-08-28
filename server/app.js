//import connectMongo from './db/config';
import mongoose from 'mongoose';
import express from 'express';
import path from 'path';
import passport from './middleware/authentication/index';
import { router as usersRouter } from './routes/secure/users';
import { router as questionsRouter } from './routes/secure/questions';
import { router as answersRouter } from './routes/secure/answers';
import { router as openRouter } from './routes/open/index';
import { morgan as logger } from 'morgan';

const app = express();

try {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  console.log('Connected to MongoDB');
} catch (e) {
  console.log(e.toString());
}

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
app.use('api/questions', questionsRouter);
app.use('/api/questions/:qId/answers', answersRouter); // should this be the same path as questions?

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

export default app;
