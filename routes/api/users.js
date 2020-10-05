const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const User = require("../../models/User");
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

  // const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        // errors.username = "This user does not exist";
        errors.email = "User not found";
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

router.get('/:id', (req, res) => {
  // debugger
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => 
      res.status(404).json(err));
});

const createBcrypt = (password) => {
  return bcrypt.genSalt(10, (err, salt) => {
    return bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      // debugger
      return hash;
    });
  });
};

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  if (req.body.password) {
    User.findByIdAndUpdate(id, {password: createBcrypt(req.body.password)}, 
      {new: true}, (err, user) => {
        res.json(user);
      });      
  }
  User.findByIdAndUpdate(id, req.body, {new: true}, (err, user) => {
    res.json(user);
  });
});

// router.patch('/:id', (req, res) => {
//   User.findById(req.params.id)
//     .then(user1 => {
//       if (req.body.username) {
//         User.findOne({ username: req.body.username }).then(user2 => {
//           if (user2) {
//             return res.json({error: 'username already exists'});
//           } else {
//             user1.username = req.body.username;
//           }
//         });
//       }
//       if (req.body.password) {
//         user1.password = createBcrypt(req.body.password);
//       }
//       user1.save()
//         .then(user => res.json(user))
//         .catch(err => res.json(err));
//     });
// });



module.exports = router;