const db = require('../models/foodbankModel')

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
    // console.log("request body in RedirectController: ", userReqBod)
                  console.log("made it to findListings controller")
                  console.log(userReqBod)
                  // console.log('request body in findListings controller', userReqBod)
    // console.log('i made it to findListings!', res.locals.user)
    // console.log('data persisted to redirected page', req.params.user)
  // let username = userReqBod[username]
                  const queryString = `SELECT * FROM listing WHERE zipcode = ${userReqBod.zipcode}`; // testing route handler for finding listing based on zipcode
                  //need a join from listings with zip code 
                  db.query(queryString)
                  .then((data) => {
                    console.log('data from listings', data.rows)
                    recentData = data.rows;
                    res.redirect('/home')
                  })
                  .catch((err) => console.error('Error in findListings middleware: ', err))
  
  // Query SQL DB for SELECT * WHERE userReqBody === zipcode_id
  // res.locals.listings = 'database response';
  };

  userController.sendHome = (req, res, next) => {
        console.log("made it to sendHome")
        console.log(recentData)

       
        return next()
  }
  

  userController.createUser = (req, res, next) => {
    // create user in database
    // if username already exists, redirect to default path '/'
    // if user is successfully created, redirect to home page
    res.redirect('/redirect')
    return next();
  }



  

module.exports = userController;
