const Session = require('../models/session-model')
const seedData = require('./session-seeds.json')

console.log(seedData)

Session.deleteMany({})
    .then(() => {
        return Session.insertMany(seedData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })