const path = require('path')
const express = require('express')

const app = express();

const PORT = 3000;

const cors = require('cors');

const cookieParser = require('cookie-parser');

const eventController = require('./controllers/eventController')
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController')
const { Db } = require('mongodb');

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors());
app.use(cookieParser());


/*
login
*/
// Receive get request from front-end to /user endpoint
app.post('/user', userController.verifyLogin, (req, res) => {
  console.log('in server.js');
  console.log(res.locals.verifyUser)
  return res.status(200).json(res.locals.verifyUser)
  // return res.status(200).send('test-server-return')
})

// interested in event button

// test cookie set

// get all events

app.get('/events', eventController.getEvents, (req, res) => {
  console.log('successfully get events');
  return res.status(200).json(res.locals.events);
})
// statically serve our build folder if we are in production

if (process.env.NODE_ENV === 'production') {
  // serves the build folder to index.html on <script> tag
  app.use('/build', express.static(path.join(__dirname, '../build')));

  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
  });
}

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occured' },
  }
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
})


app.listen(PORT, () => {
  console.log('Listening on ', PORT)
})

module.exports = app;