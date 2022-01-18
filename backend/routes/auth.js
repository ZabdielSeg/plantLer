const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const isLoggedOut = require("../middlewares/isLoggedOut");
const isLoggedIn = require("../middlewares/isLoggedIn");


// router.get("/login", (req, res, next) => {
//   res.render("auth/login", { "message": req.flash("error") });
// });


// router.get("/signup", (req, res, next) => {
//   res.render("auth/signup");
// });

router.post("/signup", isLoggedOut, (req, res, next) => {
  const { username, password, isSeller, description } = req.body;

  let seller;
  if(!isSeller) { seller = false;}

  let theDescription;
  if(!description) {theDescription = '';}

  if (username === "" || password === "") {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

  if (password.length < 7) {
    res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (err) {
      res.status(500).json({ message: "Username check went bad. 1" });
      return;
    }

    if (user) {
      res.status(500).json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      isSeller: seller,
      description: theDescription,
      plants: []
    });

    newUser.save()
      .then(aNewUser => {
        req.login(aNewUser, (err) => {
          if (err) {
            res.status(500).json({ message: 'Login after signup went bad.' });
            return;
          }
          // Send the user's information to the frontend
          const { username, isSeller, plants, description } = aNewUser;
          const theUser = { username, isSeller, plants, description };
          res.status(200).json(theUser);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
        next(err);
      });
  });
});

router.post("/login", isLoggedOut, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if(err) console.log(err);
    if(!user) return res.status(400).json({ errorMessage: "This username is not registered. Please signup first." });
    else {
      req.logIn(user, (err) => {
        if(err) console.log(err);
        const { username, isSeller, plants, description } = user;
        const theUser = { username, isSeller, plants, description };
        res.status(200).json(theUser);
        console.log(req.user);
      });
    }
  })(req, res, next); 
});


router.get('/loggedin', (req, res, next) => {
  if(!req.user) res.json({message: 'No user loggedin'});
  const { username, isSeller, plants, description } = req.user;
  const theUser = { username, isSeller, plants, description };
  res.status(200).json(theUser);
});

router.post("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});

module.exports = router;