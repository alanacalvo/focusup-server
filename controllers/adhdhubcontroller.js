const express = require('express');
const app = express.Router();
const Session = require('../models/session-model');

app.get('/', (req,res) => {
  Session.find({})
    .then(sessions => res.send(sessions))
    .catch(console.error)
});

app.get('/:id', (req,res) => {
  Session.findById(req.params.id)
    .then(session => res.send(session))
    .catch(console.error)
})

app.get('/:id', (req,res) => {
  Session.findOneAndUpdate(
    {_id: req.params.id},
    {
      name: req.body.name,
      type: req.body.type,
      todos: req.body.todos
    }
  )
})


app.post('/newsession', function(req,res) {
  Session.create(req.body)
    .then(sessions => {
      res.send(sessions)
    })
  .catch(console.error)
})

app.delete('/:id', (req,res) => {
  Session.findOneAndRemove({_id:req.params.id})
  .then(sessions => {
    res.send(sessions)
  })
  .catch(console.error)
})



module.exports = app;
