const db = require('../models/whosGoingModels')

const eventController = {};

eventController.getEvents = (req, res, next) => {
  console.log('getting events inside controller')
  const myQuery = `SELECT * FROM events;`;

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

module.exports = eventController