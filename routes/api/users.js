const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const User = require("../../models/User");
const CoffeeScore = require("../../models/CoffeeScore");
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => {
  res.json({ msg: "This is the user route" });
});


router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email
  });
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.username = "User already exists";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                const payload = { id: user.id, username: user.username };
  
                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                });
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const identifier = req.body.identifier;
  const password = req.body.password;

  User.findOne({ "$or": [{ username: identifier }, { email: identifier }]})
    .then(user => {
      if (!user) {
        errors.identifier = "User not found";
        return res.status(400).json(errors);
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = { id: user.id, username: user.username };
          jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          });
        } else {
          errors.password = "Incorrect password";
          return res.status(400).json(errors);
        }
      });
    });
});

router.get('/', (req, res) => {
  User.find()
      .then(users => res.json(users))
      .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => 
      res.status(404).json(err));
});

router.patch('/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  if (req.user.id !== req.params.id) {
    return res.status(401).json("Unauthorized");
  }

  console.log(req.body);
  if (password) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw err;
        User.findByIdAndUpdate( id, { password: hash } )
          .then(() => res.status(202).json("Password changed accepted"))
          .catch(err => res.status(500).json(err));
      });
    });
  }
  if (username) {
    User.findByIdAndUpdate(id, { username: username }, {new: true}, (err, user) => {
      res.json(user);
    });
  }
});

module.exports = router;