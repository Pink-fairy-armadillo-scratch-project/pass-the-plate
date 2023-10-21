

const userController = {
  verifyUser(req, res, next) {
    console.log('verified');
    res.status(200).json('got back');
  },
};

module.exports = userController;
