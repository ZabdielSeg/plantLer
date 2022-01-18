module.exports = (req, res, next) => {
  if(req.isAuthenticated() && req.user.isSeller === true) {
    return next();
  } else {
    res.status(403).json({message: "You're not allowed to be here"});
  }
};