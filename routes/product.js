const express = require('express');
const { testProduct } = require('../controllers/productController');
const router = express.Router();
const { isLoggedIn, customRole } = require('../middlewares/user');

router.route('/testproduct').get(testProduct);

module.exports = router;
