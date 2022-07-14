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

app.put('/finish/:id', (req,res) => {
  Session.findByIdAndUpdate(req.params.id, 
    {todos: req.body.todos, notes: req.body.notes})
    .then(session => res.send(session))
    .catch(console.error)
})


app.post('/newsession',(req,res) => {
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
