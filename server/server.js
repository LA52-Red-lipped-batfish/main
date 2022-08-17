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
 
  return res.status(200).json(res.locals.verifyUser)
  // return res.status(200).send('test-server-return')
})
app.get('/getEvent',(req,res)=>{

  return res.status(200).send([
    {
      eventTitle:'Jacob "s birthday',
      participants:100,
      eventAddress:'300 1st street,Arcadia,CA,91006',
      eventDate:'Oct 20th 2022',
      eventTime:'8:20PM',
      eventDescription:'Have fun ',
      imageLink:"https://c.tenor.com/BF4LXetTi0kAAAAd/birthday-wishes.gif"
  },
  {
    eventTitle:'Michael "s birthday',
    participants:100,
    eventAddress:'300 1st street,Arcadia,CA,91006',
    eventDate:'Oct 20th 2022',
    eventTime:'8:20PM',
    eventDescription:'Have fun ',
    imageLink:"https://www.funimada.com/assets/images/cards/big/bday-254.gif"
},

  {
    eventTitle:'Motorcycle party',
      participants:999,
      eventAddress:'100 1st street,Arcadia,CA,91006',
      eventDate:'Oct 10th 2022',
      eventTime:'8:30PM',
      eventDescription:'Let"party',
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  },
  {
    eventTitle:'Motorcycle party',
      participants:999,
      eventAddress:'100 1st street,Arcadia,CA,91006',
      eventDate:'Oct 10th 2022',
      eventTime:'8:30PM',
      eventDescription:'Let"party',
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  },
  {
    eventTitle:'Motorcycle party',
      participants:999,
      eventAddress:'100 1st street,Arcadia,CA,91006',
      eventDate:'Oct 10th 2022',
      eventTime:'8:30PM',
      eventDescription:'Let"party',
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  },
  {
    eventTitle:'Motorcycle party',
      participants:999,
      eventAddress:'100 1st street,Arcadia,CA,91006',
      eventDate:'Oct 10th 2022',
      eventTime:'8:30PM',
      eventDescription:'Let"party',
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  }
  , {
    eventTitle:'Motorcycle party',
      participants:999,
      eventAddress:'100 1st street,Arcadia,CA,91006',
      eventDate:'Oct 10th 2022',
      eventTime:'8:30PM',
      eventDescription:'Let"party',
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  }
  , {
    eventTitle:'Motorcycle party',
      participants:999,
      eventAddress:'100 1st street,Arcadia,CA,91006',
      eventDate:'Oct 10th 2022',
      eventTime:'8:30PM',
      eventDescription:'Let"party',
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  }
  , {
    eventTitle:'Motorcycle party',
      participants:999,
      eventAddress:'100 1st street,Arcadia,CA,91006',
      eventDate:'Oct 10th 2022',
      eventTime:'8:30PM',
      eventDescription:'Let"party',
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  },
  {
    eventTitle:'Motorcycle party',
      participants:999,
      eventAddress:'100 1st street,Arcadia,CA,91006',
      eventDate:'Oct 10th 2022',
      eventTime:'8:30PM',
      eventDescription:'Let"party',
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  },
  {
    eventTitle:'Motorcycle party',
      participants:999,
      eventAddress:'100 1st street,Arcadia,CA,91006',
      eventDate:'Oct 10th 2022',
      eventTime:'8:30PM',
      eventDescription:'Let"party',
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  },
  {
    eventTitle:'Motorcycle party',
      participants:999,
      eventAddress:'100 1st street,Arcadia,CA,91006',
      eventDate:'Oct 10th 2022',
      eventTime:'8:30PM',
      eventDescription:'Let"party',
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  },
  {
    eventTitle:'Motorcycle party',
      participants:999,
      eventAddress:'100 1st street,Arcadia,CA,91006',
      eventDate:'Oct 10th 2022',
      eventTime:'8:30PM',
      eventDescription:'Let"party',
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  },
  {
    eventTitle:'Motorcycle party',
      participants:999,
      eventAddress:'100 1st street,Arcadia,CA,91006',
      eventDate:'Oct 10th 2022',
      eventTime:'8:30PM',
      eventDescription:'Let"party',
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  },
  {
    eventTitle:'Motorcycle party',
      participants:999,
      eventAddress:'100 1st street,Arcadia,CA,91006',
      eventDate:'Oct 10th 2022',
      eventTime:'8:30PM',
      eventDescription:'Let"party',
      imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  }

  ])
})
//sending request to api
//the object from the request body  

// [
//   {
//     eventName:'Michael "s birthday',
//     participants:100,
//     location:'300 1st street,Arcadia,CA,91006',
//     date:'Oct 20th 2022',
//     time:'8:20PM',
//     description:'Have fun ',
//     imgsrc:"https://www.funimada.com/assets/images/cards/big/bday-254.gif"
// }]

  

// app.post('/api',  (req, res) => {
 
//  console.log('this is post',req.body);
 
//   res.status(200)

// })
// app.put('/attend',  (req, res) => {
 
//   console.log('this is put',req.body);
  
//    res.status(200)
  
//  })

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