const { Pool } = require('pg');
const db = require('../models/whosGoingModels')

const userController = {};

//Verify that the password of the user.
userController.verifyLogin = (req, res, next) => {
  console.log('we entered the verifyLogin');

  const {username, password} = req.body;
  const usernameQuery = [username];
  if(!username || !password) return next(
    {
      log: 'Express error handler caught verifyLogin error',
      status: 401,
      message: {err: 'user submitted an empty field' },
    }
  );

  const queryText = `SELECT password FROM users WHERE username=$1;`; 
  db.query(queryText, usernameQuery)
    .then(data => {
      if (data.rowCount === 1 && password === data.rows[0].password){
          console.log('login successful');
          //ENTER HERE query to pull first name and last name
          res.locals.myUsername = {username};
          return next()
      }
      else {
          console.log('Login failed');
          res.locals.verifyUser = {userAuth: false};
          return res.redirect('/signup');
      }
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught verifyLogin error',
        status: 401,
        message: {err: err },
      })
    })
}


userController.createLogin = (req, res, next) => {
  console.log('we entered the createLogin');

  const {username, password, firstName, lastName} = req.body;
  const usernameQuery = [username, password, firstName, lastName];
  if(!username || !password || !firstName, !lastName) return next(
    {
      log: 'Express error handler caught verifyLogin error',
      status: 401,
      message: {err: 'user submitted an empty field' },
    }
  );

  const queryText = `INSERT INTO public."users" (username, password, firstName, lastName) VALUES ($1, $2, $3, $4);`;
  db.query(queryText, usernameQuery)
    .then(data => {
      console.log({data});
      console.log('data rows', data.rows);
      console.log('login successful');
      return next()
    })
    .catch((err) => {
        console.log('Create User Failed');
        return res.redirect('/signup');
  });
}


userController.goingButton = (req, res, next) => {
    console.log('entered going button');
    const {theUser, eventName, going} = req.body;
    const goingQuery = [eventName, theUser];
    const goingQuery2 = [eventName];
    queryText = "";
    queryText2 = "";
    if(going === 'true'){
      queryText = 'INSERT INTO allEvents (theEvent, theUser) VALUES ($1, $2 );'
      queryText2 = 'UPDATE eventinfo SET participants = (SELECT participants FROM eventinfo WHERE eventTitle = $1  ) + 1 WHERE eventTitle = $1 ;';
    
    }else if(going === 'FALSE'){
      console.log('delete it');
      queryText = 'DELETE FROM allEvents WHERE theEvent = $1 AND theUser = $2;'
      queryText2 = 'UPDATE eventinfo SET participants = (SELECT participants FROM eventinfo WHERE eventTitle = $1  ) - 1 WHERE eventTitle = $1 ;';
    }

    db.query(queryText, goingQuery)
      .then(data => {
        console.log('successful add/delete event');

        db.query(queryText2, goingQuery2)
        .then(data => {
          console.log('successful in updating participants');
          return next()
        })
        .catch((err) => {
          return next({
            log: 'Express error handler caught goingButton error.  Unable to add/delete row from allEvents',
            status: 401,
            message: {err: err },
          })
        })
      })
      .catch((err) => {
        return next({
          log: 'Express error handler caught goingButton error.  Unable to increment/decrement eventinfo/participants',
          status: 401,
          message: {err: err },
        })
      })

};





// userController.attendEvent = {req, res, next}

module.exports = userController;

