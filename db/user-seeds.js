const User = require('../models/user-model');
const userSeeds = require('./user-seeds.json');

User.deleteMany({})
    .then(() => {
        return User.insertMany(userSeeds)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })