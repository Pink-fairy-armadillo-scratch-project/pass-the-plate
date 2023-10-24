const db = require('../models/foodbankModel');

const listingsController = {};

listingsController.findListings = (req, res, next) => {
  // console.log("request body in RedirectController: ", userReqBod)
  console.log('request body in findListings controller', userReqBod);
  // console.log('i made it to findListings!', res.locals.user)
  // console.log('data persisted to redirected page', req.params.user)
  // let username = userReqBod[username]
  const queryString = 'SELECT * FROM listing WHERE zipcode = 11111'; // testing route handler for finding listing based on zipcode
  // need a join from listings with zip code
  db.query(queryString)
    .then((data) => {
      console.log('data from listings', data.rows);
      res.locals.listings = data.rows;
      return next();
    })
    .catch((err) => console.error('Error in findListings middleware: ', err));


// Query SQL DB for SELECT * WHERE userReqBody === zipcode_id
// res.locals.listings = 'database response';
// return next();
};


listingsController.postListing = (req, res, next) => {
  const listingReqBod = req.body;
  console.log('posting a listing thru postman: ', listingReqBod);
  const queryString = `INSERT INTO listing (title, listing_body, user_id) VALUES ('${listingReqBod.title}', '${listingReqBod.listingBody}', '9')`;
  db.query(queryString)
    .then((data) => {
      console.log('new listing: ', data.rows);
      res.locals.newListing = data.rows;
      return next();
    })
    .catch((err) => console.error('Error in postListing middleware: ', err));
};


listingsController.postComment = (req, res, next) => {
  const commentReqBod = req.body;
  console.log('posting a comment thru postman: ', commentReqBod);
};

// listingsController.findListings = (req, res, next) => {
//   console.log("request body in RedirectController: ", userReqBod)

// let username = userReqBod[username]

//   const selector = 'SELECT * FROM listings WHERE wing = $1 ORDER BY room`number';
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
