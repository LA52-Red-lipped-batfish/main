const db = require('../models/whosGoingModels')

const eventController = {};

eventController.getEvents = (req, res, next) => {
  console.log('getting events inside controller')
  // const myQuery = `SELECT * FROM eventinfo;`;
  const myQuery = `SELECT eventtitle AS eventName, to_char(eventdate,'Day Mon DD, YYYY') AS date, eventAddress AS location, to_char(eventtime, 'HH12:MI AM') AS time, imageLink AS imgsrc   FROM eventinfo;`;

  db.query(myQuery)
  .then((data) => {
    console.log(data.rows);
    // data.rows.map(element => {
    //   const newData = {
    //     eventName: element.eventtitle,
    //     location: element.eventaddress,
    //     date: 
    //   }
    // })
    res.locals.events = data.rows;
    return next();
  })
  .catch((err) => {
    return next(err)
})
}

eventController.myEvents = (req, res, next) => {
  // test 1 user's events
  // check req header for ssid cookie

  
}
module.exports = eventController