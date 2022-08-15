const { Pool } = require('pg');

const db = require('../models/whosGoingModels')


const userController = {};


userController.verifyLogin = async (req, res, next) => {
    console.log('verifyLogin');
    // Will receive username and password from the front-end in req.body

    const {username, password} = req.body;
    const usernameQuery = [username];
    const queryText = `SELECT * FROM userDetails WHERE username=$1;`; //Returns entire table from database

    // let username = 'test1';
    // let password = 'test1';
    // query database --> assume database returns an object comprised of {username: password}
    // if return is good
    // Go to next middleware
    
    db.query(queryText, usernameQuery)
        .then(data => {
            console.log(data.rowCount); //rowCount of 0 means no results found in query
            console.log(data.rowCount === 1);
            // const storedPass = data.rows[0].password
            if (data.rowCount === 1 && password === data.rows[0].password){
                console.log('login successful');
                res.locals.verifyUser = {userAuth: true};
                return next()
            }
            else {
                console.log('Login failed');
                res.locals.verifyUser = {userAuth: false};
                return res.redirect('/signup');
            }
        })
        .catch((err) => {
            return next(err)
        })
        
}


// userController.verifyLogin = (req, res, next) => {
//     console.log('verifyLogin');
//     // Will receive username and password from the front-end in req.body
//     // const {username, password} = req.body;
//     // console.log(username)
//     const queryText = `SELECT * FROM userdetails`; //Returns entire table from database

//     let username = 'test1';
//     let password = 'test1';
//     // query database --> assume database returns an object comprised of {username: password}
//     // if return is good
//     // Go to next middleware
//     console.log('test');
//     db.query(queryText)
//         .then(data => {
//             if (data.rows[0].username === username){
//                 if (data.rows[0].password === password){
//                     console.log('success');
//                     res.locals.verifyUser = {userAuth: true};
//                     return next()
//                 }
//             }
//             console.log(data.rows);
//             // if (data[username] === password) {
//             //     // Login success
//             //     res.locals.verifyUser = {userAuth: true};
//             //     return next();
//             // }
//             // else {
//             //     // Login fail
//             //     res.locals.verifyUser = {userAuth: false};
//             //     return next();
//             // }
//         })
//         .catch((err) => {
//             return next(err)
//         })
// }






// userController.attendEvent = {req, res, next}

module.exports = userController;

