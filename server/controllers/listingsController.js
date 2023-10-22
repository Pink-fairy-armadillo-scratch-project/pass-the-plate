const db = require('../models/foodbankModel');

const listingsController = {};

listingsController.findListings = (req, res, next) => {
  // console.log("request body in RedirectController: ", userReqBod)
  console.log("new user request body in RedirectController: ", newUserReqBod)

let username = userReqBod[username]

  const selector = 'SELECT * FROM listings WHERE wing = $1 ORDER BY roomnumber'; 
  //need a join from listings with zip code 
  db.query(selector, queryParams)
  .then((data) => {
    res.locals.listings = data.rows;
    return next();
  })


// Query SQL DB for SELECT * WHERE userReqBody === zipcode_id
res.locals.listings = 'database response';
return next();
};

// listingsController.findListings = (req, res, next) => {
//   // console.log("request body in RedirectController: ", userReqBod)
//   console.log("new user request body in RedirectController: ", newUserReqBod)

// let username = userReqBod[username]

//   const selector = 'SELECT * FROM listings WHERE wing = $1 ORDER BY roomnumber'; 
//   //need a join from listings with zip code 
//   db.query(selector, queryParams)
//   .then((data) => {
//     res.locals.listings = data.rows;
//     return next();
//   })


// // Query SQL DB for SELECT * WHERE userReqBody === zipcode_id
// res.locals.listings = 'database response';
// return next();
// };

module.exports = listingsController;