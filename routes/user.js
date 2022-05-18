const express = require('express');
const router = express.Router();

const {
  signup,
  login,
  logout,
  forgotPassword,
} = require('../controllers/userController');

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/forgotPassword').post(forgotPassword);

module.exports = router;
