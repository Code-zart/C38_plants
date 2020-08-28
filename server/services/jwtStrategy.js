const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const JwtStrategy = Strategy;
const User = require('../db/models/user');

const isProduction = process.env.NODE_ENV === 'production';
const secretOrKey = isProduction
  ? process.env.JWT_SECRET_PROD
  : process.env.JWT_SECRET_DEV;

// JWT strategy
const jwtLogin = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromHeader('x-auth-token'),
    secretOrKey
  },
  async (payload, done) => {
    try {
      const user = await User.findById(payload.id);

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (err) {
      done(err, false);
    }
  }
);

passport.use(jwtLogin);
