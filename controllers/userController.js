const User = require('../models/user');
const BigPromise = require('../middlewares/bigPromise');

exports.signup = BigPromise(async (req, res, next) => {
  res.send('SignUp Route');
});
