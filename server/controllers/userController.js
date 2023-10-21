


const userController = {
  verifyUser(req, res, next) {
    console.log("verified")
    console.log("request body in controller: ", req.body)
    res.locals.activitySave = "posted successfully!"
    return next()
  }
}

module.exports = userController