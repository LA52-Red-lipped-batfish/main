const db = require('../models/whosGoingModels')

const eventController = {};

eventController.getEvents = (req, res, next) => {
  console.log('getting events inside controller')
  const myQuery = `SELECT * FROM eventinfo;`;

  db.query(myQuery)
  .then((data) => {
    console.log(data.rows);
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