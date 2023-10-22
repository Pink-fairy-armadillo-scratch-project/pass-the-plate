const db = require('../models/foodbankModel')

const fakeListing = {
  
}



const userController = {};

  let userReqBod;
  let newUserReqBod;
  
  userController.verifyUser = (req, res, next) => {
    // console.log("we shouldnt be hitting this")
    // console.log("request body in Originalcontroller: ", req.body)
    userReqBod = req.body;
    // find user in database
    // if user cannot be found, redirect to default path '/'
    // if user is found, redirect to home page (currently set to '/redirect')
    res.redirect('/redirect')
    return next();
  };

  userController.createUser = (req, res, next) => {
    newUserReqBod = req.body;
    console.log("this is new user request body: ", newUserReqBod)
    // create user in database
    // if username already exists, redirect to default path '/'
    // if user is successfully created, redirect to home page
    res.redirect('/redirect')
    return next();
  }


  userController.findListings = (req, res, next) => {
    // console.log("request body in RedirectController: ", userReqBod)
    console.log("new user request body in RedirectController: ", newUserReqBod)

    let username = userReqBod[username]

    // const selector = 'SELECT * FROM listings WHERE wing = $1 ORDER BY roomnumber'; 
    // //need a join from listings with zip code 
    // db.query(selector, queryParams)
    // .then((data) => {
    //   res.locals.listings = data.rows;
    //   return next();
    // })



    //Query SQL DB for SELECT * WHERE userReqBody === zipcode_id
    res.locals.listings = "database response"
    return next()
  };


module.exports = userController;
