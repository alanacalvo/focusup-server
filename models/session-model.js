const mongoose = require('../db/connection');

const SessionSchema = new mongoose.Schema(
  {
    name: String,
    type: {
      pomodoro: {
        type: Boolean
      },
      regular: {
        type: Boolean
      }
    },
    length: {
      hours: Number,
      minutes: Number,
      seconds: Number,
    },
    preSessionTodos: [String],
    postSessionTodos: [String],
    colorRating: String,
    starRating: String,
    notes: String,
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    },
    day: { 
      type: Date,
      default: new Date().getDate()
    }
  },
);

const Session = mongoose.model('Session', SessionSchema);

module.exports = Session;