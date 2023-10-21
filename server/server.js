const express = require('express');
const app = express();
const userController = require('./controllers/userController')

app.use(express.json());

app.post('/login', userController.verifyUser, (req, res) => {

    console.log("reached server")

    res.status(200).json(res.locals.activitySave)
})














app.listen(1234);