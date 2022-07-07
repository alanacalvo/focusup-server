const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true
    },
    // sessionHistory: {
    //   sessions: [{
    //     type: Schema.Types.ObjectId, 
    //     ref: 'Session'
    //   }]
    // }
  }
)

const User = mongoose.model('User', UserSchema);

module.exports = User;