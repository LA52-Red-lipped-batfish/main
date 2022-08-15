const { Pool } = require('pg');

const db = require('../models/whosGoingModels')


const userController = {};


userController.verifyLogin = (req, res, next) => {
    console.log('verifyLogin');
    // Will receive username and password from the front-end in req.body

    const {username, password} = req.body;

    const test = [username];
    const queryText = `SELECT * FROM userDetails WHERE username=$1;`; //Returns entire table from database

    // let username = 'test1';
    // let password = 'test1';
    // query database --> assume database returns an object comprised of {username: password}
    // if return is good
    // Go to next middleware
    db.query(queryText, test)
        .then(data => {
            console.log('inside query');

            console.log(data.rows[0].password);
            const storedPass = data.rows[0].password
            
            if (password === storedPass){

                console.log('success');
                res.locals.verifyUser = {userAuth: true};
                return next()
            }

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

