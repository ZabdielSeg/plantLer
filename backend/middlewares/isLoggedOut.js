module.exports = (req, res, next) => {
  // if an already logged in user tries to access the login page it
  // redirects the user to the home page
  if (req.user) {
    return res
      .status(401)
      .json({
        message: "You should not be logged in to make this request",
      });
  }
  next();
};
