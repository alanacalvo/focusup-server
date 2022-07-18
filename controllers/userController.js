const express = require('express');
const app = express.Router();
const User = require('../models/user-model');

const bcrypt = require('bcrypt');
const passport = require('passport');

// const initializePassport = require('../passport-config');
// initializePassport(
//   passport, 
//   email => User.find(user => user.email === email)
// );

// TO SEE USERS IN DB
app.get('/', (req, res) => {
  User.find({})
    .then(users => res.send(users))
    .catch(console.error)
})

app.post('/', (req,res) => {
  User.create(req.body)
    .then(users => res.send(users))
    .catch(console.error)
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: 'Login Success.', user: user })
      } else {
        res.send({ message: 'Incorrect username or password.' })
      }
    } else {
      res.send({ message: 'Incorrect username or password.' })
    }
  })
})

// app.post('/signup', (req, res) => {
//   console.log(req.body)
//   const { firstName, lastName, email, password, confirmPassword } = req.body;
//   User.findOne({ email: email }, (err, user) => {
//     if (user) {
//       res.send({ message: "An account with that email already exists." })
//     } else {
//       const user = new User({ firstName, lastName, email, password, confirmPassword })
//       user.save(err => {
//         if (err) {
//           res.send(err)
//         } else {
//           res.send({ message: "Account created." })
//         }
//       })
//     }
//   })
// })

// app.post('/login', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
// })
// )

// app.post('/users', async (req,res) => {
//   try {
//     const salt = await bcrypt.genSalt()
//     const hashedPassword = await bcrypt.hash(
//       req.body.password, 
//       req.body.confirmPassword, 
//       salt)
//       console.log('salt', salt)
//       console.log('hash', hashedPassword)
//       User.create({
//         req.body.name
//       })
//         .then(users => {
//           res.send(users)
//         })
//         .catch(console.error)
//       }
//     });

module.exports = app;