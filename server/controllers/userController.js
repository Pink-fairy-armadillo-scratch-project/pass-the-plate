

const userController = {
  verifyUser(req, res, next) {
    console.log('verified');
    console.log('req.body: ', req.body);
    res.status(200).json('got back');
  },
};

module.exports = userController;
