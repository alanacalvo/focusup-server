// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }

const express = require('express');
const app = express();
const cors = require('cors');
require('./db/connection');
// const flash = require('express-flash')
// const session = require('express-session')
const Session = require('./controllers/sessionController');
const User = require('./controllers/userController');

// require('dotenv').config({ path: './config.env' });

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: false,
  })
);
app.get('/favicon.ico', (req,res) => {
  console.log('favicon');
})

// app.use(flash())
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/sessions', Session); 
app.use('/users', User);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Express running on localhost:${port}`);
});
