const Session = require('../models/session-model');
const sessionSeeds = require('./session-seeds.json');

Session.deleteMany({})
    .then(() => {
        return Session.insertMany(sessionSeeds)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })
