const express = require('express');
const {
  addProduct,
  getAllProduct,
} = require('../controllers/productController');
const router = express.Router();
const { isLoggedIn, customRole } = require('../middlewares/user');

// user routes
router.route('/products').get(getAllProduct);

// admin routes
router
  .route('/admin/product/add')
  .post(isLoggedIn, customRole('admin'), addProduct);

module.exports = router;
