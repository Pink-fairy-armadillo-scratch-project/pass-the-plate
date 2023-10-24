const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userController = require('./controllers/userController');
const listingsController = require('./controllers/listingsController');

const app = express();

// parse the req.body, the cookies, and urlencoded data
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.post('/signup', userController.createUser, (req, res) => {
  console.log('new user request body in server: ', req.body);
});


app.post('/login', userController.verifyUser, (req, res) => {
  // console.log("request body in server: ", req.body)
  // res.status(200).json(res.locals.activitySave)
  res.cookie('username', res.locals.username);
  res.cookie('zipcode', res.locals.zipcode);
  res.cookie('userID', res.locals.userID);
  res.status(200).sendFile(path.resolve(__dirname, '../dist/home.html'));
});


app.get('/listings', userController.findListings, (req, res) => {
  console.log('made it to redirect');
  console.log(res.locals.listings);
  res.cookie('listing', res.locals.listings);
  // console.log('this is the find listing controller function:', req.body);
  // console.log('listings data made it to the server: ', res.locals.listings)
  res.status(200).json(res.locals.listings);
});

app.post('/postlisting', userController.postListing, (req, res) => {
  console.log('successfully posted listing in database');
  res.send(200);
});

app.post('/postcomment', userController.postComment, (req, res) => {
  res.send(200);
});

app.get('/comments', userController.getComments, (req, res) => {
  res.send(200).json(res.locals.comments);
});

app.listen(1234, () => {
  console.log('Listening on port 1234');
});
