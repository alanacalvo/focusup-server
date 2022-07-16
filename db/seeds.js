const Session = require('../models/session-model');
const User = require('../models/user-model');
const sessionSeeds = require('./session-seeds.json');
const userSeeds = require('./user-seeds.json');

Session.deleteMany({})
    .then(() => {
        return Session.insertMany(sessionSeeds)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })

User.deleteMany({})
    .then(() => {
        return User.insertMany(userSeeds)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })
    