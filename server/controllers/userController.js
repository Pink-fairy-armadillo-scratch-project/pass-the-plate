


const userController = {
  verifyUser(req, res, next) {
    console.log("verified")
    res.locals.activitySave = "posted successfully!"
    return next()
  }
}

module.exports = userController