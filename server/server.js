const path = require('path')
const express = require('express')

const app = express();

const PORT = 3000;

const cors = require('cors');

const cookieParser = require('cookie-parser');

const eventController = require('./controllers/eventController')
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController')
// const { Db } = require('mongodb');

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

//sending request to api
//the object from the request body  
//  {
//      event: "michael's birthday",
//      date: '2022-08-17',
//      email: 'ilovepuffseven@gmail.com',
//      description: 'lets party !!!'
//    }
app.post('/api',  (req, res) => {
 
 console.log('this is post',req.body);
 
  res.status(200)
  // return res.status(200).send('test-server-return')
})

app.put('/attend',  (req, res) => {
 
  console.log('this is put',req.body);
  
   res.status(200)
   // return res.status(200).send('test-server-return')
 })

/*
sending POST request to /login
sameple object of the request body  
  {
      username: 'test',
      pasword: 'test' 
  }
*/
app.post('/login',  (req, res) => {
 
  console.log('POST REQUEST BODY TO /login', req.body);
  
  res.status(200)
  // return res.status(200).send('test-server-return')
})

/*
sending POST request to /signup
sample object of the request body  
  {
      username: 'test',
      pasword: 'test',
      firstName: 'John',
      lastName: 'Doe' 
  }
*/
app.post('/signup',  (req, res) => {
  console.log('POST REQUEST BODY TO /signup', req.body);
  
  res.status(200)
  // return res.status(200).send('test-server-return')
})



// interested in event button

// test cookie set

// get all events

app.get('/getEvent', eventController.getEvents, (req, res) => {
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

// build
app.get("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname, '../build/index.html'))
})

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