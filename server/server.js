const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const userController = require('./controllers/userController');
const listingsController = require('./controllers/listingsController')
const cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(cookieParser())

app.post('/signup', userController.createUser, (req, res) => {
  console.log("new user request body in server: ", req.body)

})


app.post('/login', userController.verifyUser, (req, res) => {
  // console.log('request body in server: ', req.body);
    console.log("request body in server: ", req.body)
    // res.status(200).json(res.locals.activitySave)
    res.cookie('username', res.locals.user.username);
    res.cookie('zipcode', res.locals.user.zipcode)
    res.status(200).sendFile(path.resolve(__dirname, '../dist/home.html'))
})


app.get('/listings', userController.findListings, (req, res) => {
  console.log('made it to redirect');
  console.log(res.locals.listings)
  // console.log('this is the find listing controller function:', req.body);
  // console.log('listings data made it to the server: ', res.locals.listings)
  res.status(200).json(res.locals.listings);
});

app.post('/postlisting', listingsController.postListing, (req, res) => {
  console.log('made it to server!', req.body)
  res.status(200).json(res.locals.newListing);
})

app.post('/postcomment', listingsController.postComment)

app.get('/comments')

// app.get('/redirect', listingsController.findListings, (req, res) => {
//     console.log('made it to redirect')
//     console.log("request body", req.body)

//     res.status(200)
// })


// Joe wrote these two routes on Saturday night to test some front end logic
// app.get('/listings', (req, res) => {
//   const listingArr = [
//     {
//       title: 'Cheese',
//       body: 'this is my listing',
//       user: 'Andrew',
//     },
//     {
//       title: 'Milk',
//       body: 'this is my listing',
//       user: 'Jordan',
//     },
//     {
//       title: 'Yogurt',
//       body: 'this is my listing',
//       user: 'Jordan',
//     },
//     {
//       title: 'Ice Cream',
//       body: 'this is my listing',
//       user: 'Joe',
//     },
//   ];

//   res.status(200).json(listingArr);
// });

app.get('/comments', (req, res) => {
  const dummyComments = [
    {
      comment: 'Hello',
      user: 'Perkins',
    },
    {
      comment: 'Thank you',
      user: 'Grove City Food Pantry',
    },
  ];

  res.status(200).json(dummyComments);
});

app.listen(1234, () => {
  console.log('Listening on port 1234');
});
