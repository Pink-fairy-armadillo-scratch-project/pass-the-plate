const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const userController = require('./controllers/userController');

app.use(bodyParser.urlencoded());
app.use(express.json());

app.post('/login', userController.verifyUser, (req, res) => {
  console.log('request body in server: ', req.body);

  // res.status(200).json(res.locals.activitySave)
});


app.get('/redirect', userController.findListings, (req, res) => {
  console.log('made it to redirect');
  console.log('this is the find listing controller function:', req.body);

  res.status(200).json(res.locals.listings);
});

// app.get('/redirect', (req, res) => {
//     console.log('made it to redirect')
//     console.log("request body", req.body)

//     res.status(200)
// })


// Joe wrote these two routes on Saturday night to test some front end logic
app.get('/listings', (req, res) => {
  const listingArr = [
    {
      title: 'Listing 1',
      body: 'this is my listing',
    },
    {
      title: 'Listing 2',
      body: 'this is my listing',
    },
    {
      title: 'Listing 3',
      body: 'this is my listing',
    },
    {
      title: 'Listing 4',
      body: 'this is my listing',
    },
  ];

  res.status(200).json(listingArr);
});

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
