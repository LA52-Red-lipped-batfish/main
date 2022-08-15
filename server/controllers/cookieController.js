const db = require('../models/whosGoingModels')

cookieController = {};

cookieController.setCookie = (req, res, next) => {
  console.log('in set cookies')
  const { username } = req.body;

  res.cookie('ssid', username, { httpOnly: true});
  return next();
  // const user = [username]
  // const userQuery = `SELECT _id FROM userDetails WHERE username=$1;`
  // const cookieCreate = `INSERT INTO cookies(SSIDcookies, user_id) VALUES ($1, $2);`
  // const random = Math.ceil(Math.random()*12345)

  // res.cookie('ssid', username, {httpOnly: true});
  // res.locals.cookie = username;
  // return next()
  // db.query(userQuery, user)
  // .then((id) => {
  //   // console.log(id)
  //   const userID = id.rows[0]._id
  //   res.cookie('ssid', random, { httpOnly: true})
  //   const cookieData = [random, userID]
  //   .catch((err) => {
  //     return next(err)
  //   })
  // })

  // db.query(cookieCreate, cookieData)
  // .then((res) => {
  //   console.log('after cookieCreate ', res)
  //   res.locals.cookie = random
  // })

  // after verifying user.. user entered correct login details
  // query userdetails database and set variable equal to find user_id that matches username set

  // 
}

module.exports = cookieController;