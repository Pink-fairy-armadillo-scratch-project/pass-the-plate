const express = require('express');
const app = express();
const userController = require('./controllers/userController')

app.use(express.json());

app.post('/login', userController.verifyUser)














app.listen(1234);