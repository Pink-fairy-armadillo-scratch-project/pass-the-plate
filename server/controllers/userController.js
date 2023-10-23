const db = require('../models/foodbankModel')
const cookieParser = require('cookie-parser')

// const fakeListing = {

// };


const userController = {};

  let userReqBod;
  // let newUserReqBod;
  
  userController.verifyUser = (req, res, next) => {
    // console.log("we shouldnt be hitting this")
    // console.log("request body in Originalcontroller: ", req.body)
    console.log(req.body);
    userReqBod = req.body;
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
                          res.locals.user = data.rows[0];
                          return next();
                          // res.redirect('/home')
                        } else {
                          // if user cannot be found, redirect to default path '/'
                          // console.log('user not found...', data.rows)
                          res.redirect('/');
                        }
                      })
                      .catch((err) => {
                        console.error('Error in verifyUser middleware: ', err)
                      }) 
                   
  };

 let recentData;

  userController.findListings = (req, res, next) => {

                  console.log("made it to findListings controller")              
                  const queryString = `SELECT * FROM listing WHERE zipcode = ${req.cookies.zipcode}`; // testing route handler for finding listing based on zipcode
                
                  db.query(queryString)
                  .then((data) => {
                    console.log('data from listings', data.rows)
                    res.locals.listings = data.rows;
                    return next()
                  })
                  .catch((err) => console.error('Error in findListings middleware: ', err))
  
  // Query SQL DB for SELECT * WHERE userReqBody === zipcode_id
  // res.locals.listings = 'database response';
  };



  userController.createUser = (req, res, next) => {
    // create user in database
    // if username already exists, redirect to default path '/'
    // if user is successfully created, redirect to home page
    res.redirect('/redirect')
    return next();
  }



  

module.exports = userController;
