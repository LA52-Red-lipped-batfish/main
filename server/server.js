const path = require('path')
const express = require('express')

const app = express();

const PORT = 3000;

const eventController = require('./controllers/eventController')
const userController = require('./controllers/userController');
const { Db } = require('mongodb');

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(express.static(path.resolve(__dirname, '../build')))

/*
login
*/
// Receive get request from front-end to /user endpoint
app.post('/user', userController.verifyLogin, (req, res) => {
  return res.status(200).json(res.locals.verifyUser)
})

// interested in event button


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