const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userController = require('./controllers/userController');

app.use(bodyParser.urlencoded());
app.use(express.json());

app.post('/login', userController.verifyUser, (req, res) => {

    console.log("request body in server: ", req.body)

    // res.status(200).json(res.locals.activitySave)
})




app.get('/redirect', userController.findListings, (req, res) => {
    console.log('made it to redirect')
    console.log("this is the find listing controller function:", req.body)

    res.status(200).json(res.locals.listings)
})

// app.get('/redirect', (req, res) => {
//     console.log('made it to redirect')
//     console.log("request body", req.body)

//     res.status(200)
// })

app.listen(1234, () => {
  console.log('Listening on port 1234');
});
