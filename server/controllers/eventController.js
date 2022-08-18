const db = require('../models/whosGoingModels')

const eventController = {};

eventController.getEvents = (req, res, next) => {
  console.log('getting events inside controller')

  const myQuery = `SELECT participants, eventDescription, eventtitle AS eventName, to_char(eventdate,'Day Mon DD, YYYY') AS date, eventAddress AS location, to_char(eventtime, 'HH12:MI AM') AS time, imageLink AS imgsrc   FROM eventinfo;`;

  db.query(myQuery)
  .then((data) => {
    // console.log(data.rows);
 
    res.locals.events = data.rows;
    return next();
  })
  .catch((err) => {
    return next(err)
})
}

eventController.addEvent = (req, res, next) => {
  console.log('entered addEvent');

  const {eventTitle, eventDescription, eventDate, eventTime, imageLink, location} = req.body;

  
  const values = [eventTitle,eventDescription,imageLink,eventDate,eventTime, location];
  console.log(values);

  
  const qry = `INSERT INTO eventinfo (eventTitle, eventDate, eventTime, imageLink, eventAddress, eventDescription, theUser, participants) VALUES($1, to_date($4,'YYYY-MM-DD'), to_timestamp($5,'HH24:MI'), $3, $6, $2 ,'miketyson', 3);`
  
  db.query(qry,values).then((data) => {
    console.log(data.rows);
    res.locals.newEvent = data;
    return next();
  })
  .catch(err => {return next(err)
  });
}

eventController.myEvents = (req, res, next) => {
  // test 1 user's events
  // check req header for ssid cookie

  
}
module.exports = eventController