

const fakeListing = {

};


const userController = {};

let userReqBod;

userController.verifyUser = (req, res, next) => {
  console.log('we shouldnt be hitting this');
  // console.log("request body in Originalcontroller: ", req.body)
  userReqBod = req.body;
  res.redirect('/redirect');
  return next();
};

userController.findListings = (req, res, next) => {
  console.log('request body in RedirectController: ', userReqBod);

  let username = userReqBod[username]


  // Query SQL DB for SELECT * WHERE userReqBody === zipcode_id
  res.locals.listings = 'database response';
  return next();
};


module.exports = userController;
