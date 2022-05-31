const express = require('express');
const { createOrder, getOneOrder } = require('../controllers/orderController');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/user');

router.route('/order/create').post(isLoggedIn, createOrder);
router.route('/order/:id').get(isLoggedIn, getOneOrder);

module.exports = router;
