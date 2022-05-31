const express = require('express');
const { createOrder } = require('../controllers/orderController');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/user');

router.route('/order/create').post(isLoggedIn, createOrder);

module.exports = router;
