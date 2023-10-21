const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userController = require('./controllers/userController')

app.use(bodyParser.urlencoded());
app.use(express.json());

app.post('/login', userController.verifyUser, (req, res) => {

    console.log("request body in server: ", req.body)

    res.status(200).json(res.locals.activitySave)
})














app.listen(1234);