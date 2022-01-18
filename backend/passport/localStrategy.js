const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/User');
const bcrypt        = require('bcrypt');

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, 
  (username, password, done) => {
    User.findOne({ username })
    .then(foundUser => {
      if (!foundUser) {
        return done(null, false, { message: 'Incorrect username' });
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, foundUser);
    })
    .catch(err => done(err));
  }
));
