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
      minutes: Number,
      hours: Number,
    },
    preSessionTodos: [String],
    postSessionTodos: [String],
    colorRating: String,
    starRating: String,
    notes: String,
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

const Session = mongoose.model('Session', SessionSchema);

module.exports = Session;