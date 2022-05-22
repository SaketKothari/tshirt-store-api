const User = require('../models/user');
const BigPromise = require('../middlewares/bigPromise');
const CustomError = require('../utils/customError');
const jwt = require('jsonwebtoken');

exports.isLoggedIn = BigPromise(async (req, res, next) => {
  const token =
    req.cookies.token || req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return next(new CustomError('Login first to access this page', 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);

  next();
});

// Since we are spreading it admin string passed from routes will get added to routes array
exports.customRole = (...roles) => {
  return (req, res, next) => {
    // req.user.role => we get role from the database
    if (!roles.includes(req.user.role)) {
      return next(new CustomError('You are not allowed for this resouce', 403));
    }
    next();
  };
};
