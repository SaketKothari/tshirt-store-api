const express = require('express');
const {
  createOrder,
  getOneOrder,
  getLoggedInOrders,
  admingetAllOrders,
  adminUpdateOrder,
} = require('../controllers/orderController');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/user');

router.route('/order/create').post(isLoggedIn, createOrder);
router.route('/order/:id').get(isLoggedIn, getOneOrder);
router.route('/myorder').get(isLoggedIn, getLoggedInOrders);

//admin routes
router
  .route('/admin/orders')
  .get(isLoggedIn, customRole('admin'), admingetAllOrders);
router
  .route('/admin/order/:id')
  .put(isLoggedIn, customRole('admin'), adminUpdateOrder);

module.exports = router;
