// const LocalStrategy = require('passport-local');
// const bcrypt = require('bcrypt');

// function initialize(passport) {
//   const authenticateUser = (email, password, done) => {
//     const user = getUserByEmail(email)
//     if (user == null) {
//       return done(null, false, { message: 'No user with that email address.'})
//     }
//     try {
//       if (await bcrypt.compare(password, user.password)) {
//         return done(null, user)
//       } else {
//         return done(null, false, { message: 'Incorrect password'})
//       }
//     } catch (e) {
//       return done(e)
//     }
//   }
//   passport.use(new LocalStrategy({ usernameField: 'email' }),
//     authenticateUser)
//     passport.serializeUser((user, done) => { })
//     passport.deserializeUser((id, done) => { })
// }

// module.export = initialize;