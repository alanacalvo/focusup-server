const express = require('express');
const app = express();
const cors = require('cors');
require('./db/connection')
const Session = require('./controllers/adhdhubcontroller')

// require('dotenv').config({ path: './config.env' });

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(Session);
// app.use(require(''));


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Express running on localhost:${port}`)
})
