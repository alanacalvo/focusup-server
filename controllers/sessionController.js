const express = require('express');
const app = express.Router();
const Session = require('../models/session-model');

app.get('/', (req, res) => {
  Session.find({})
    .then(sessions => res.send(sessions))
    .catch(console.error)
});

app.get('/:id', (req, res) => {
  console.log('fuck', req.params)
  Session.findById(req.params.id)
    // .populate('userId')
    // .then(console.log('userId'))
    .then(session => res.send(session))
    .catch(console.error)
})

app.put('/:id', (req, res) => {
  Session.findByIdAndUpdate(req.params.id,
    {
      postSessionTodos: req.body.postSessionTodos,
      notes: req.body.notes,
      colorRating: req.body.colorRating,
      starRating: req.body.starRating
    })
    .then(session => res.send(session))
    .catch(console.error)
})


// WILL NEED ANOTHER .POST FOR POST SESSION SURVEYS

app.post('/newsession', (req, res) => {
  Session.create(req.body)
    .then(sessions => {
      res.send(sessions)
    })
    .catch(console.error)
})

app.delete('/:id', (req, res) => {
  Session.findOneAndRemove({ _id: req.params.id })
    .then(sessions => {
      res.send(sessions)
    })
    .catch(console.error)
})

module.exports = app;