const { Pool } = require('pg');

const db = require('../models/whosGoingModels')


const userController = {};

userController.verifyLogin = (req, res, next) => {
    console.log('verifyLogin');
    // Will receive username and password from the front-end in req.body
    // const {username, password} = req.body;
    const queryText = `SELECT * FROM userdetails`; //Returns entire table from database

    let username = 'test1';
    let password = 'test1';
    // query database --> assume database returns an object comprised of {username: password}
    // if return is good
    // Go to next middleware
    db.query(queryText)
        .then(data => {
            if (data.rows[0].username === username){
                if (data.rows[0].password === password){
                    console.log('success');
                    res.locals.verifyUser = {userAuth: true};
                    return next()
                }
            }
            console.log(data.rows);
            // if (data[username] === password) {
            //     // Login success
            //     res.locals.verifyUser = {userAuth: true};
            //     return next();
            // }
            // else {
            //     // Login fail
            //     res.locals.verifyUser = {userAuth: false};
            //     return next();
            // }
        })
        .catch((err) => {
            return next(err)
        })
}

// userController.attendEvent = {req, res, next}

module.exports = userController;

