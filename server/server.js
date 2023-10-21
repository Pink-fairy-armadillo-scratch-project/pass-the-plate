const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const userController = require('./controllers/userController');

app.use(express.json());
app.use(bodyParser.urlencoded());

app.post('/login', userController.verifyUser);


app.listen(1234, () => {
  console.log('Listening on port 1234');
});
