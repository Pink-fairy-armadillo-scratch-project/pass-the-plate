const db = require('../models/foodbankModel')

// const fakeListing = {

// };


const userController = {};

// let userReqBod;
// let newUserReqBod;
  
  userController.verifyUser = (req, res, next) => {
    // console.log("we shouldnt be hitting this")
    // console.log("request body in Originalcontroller: ", req.body)
    let userReqBod = req.body;
    // res.redirect('/redirect')
    // find user in database
    console.log('testing userReqBod: ', userReqBod)
    const queryString = `SELECT username, password, zipcode FROM "user" WHERE username = '${userReqBod.username}' AND password = '${userReqBod.password}' AND zipcode = ${userReqBod.zipcode}`
    db.query(queryString)
    .then((data) => {
      // console.log('request body in verifyUser controller: ', userReqBod)
      // console.log('should log user inputted in login form', data.rows)
      if (data.rows.length !== 0) {
        // if user is found, redirect to home page (currently set to '/listings')
        console.log('user found!', data.rows)
        // res.locals.user = data.rows;
        res.redirect('/listings')
      } else {
        // if user cannot be found, redirect to default path '/'
        console.log('user not found...', data.rows)
        res.redirect('/');
      }
    })
    .catch((err) => {
      console.error('Error in verifyUser middleware: ', err);
    });
  };



  userController.createUser = (req, res, next) => {
    // create user in database
    // if username already exists, redirect to default path '/'
    // if user is successfully created, redirect to home page
    res.redirect('/redirect')
    return next();
  }

module.exports = userController;
