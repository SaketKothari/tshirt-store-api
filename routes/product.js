const express = require('express');
const {} = require('../controllers/productController');
const router = express.Router();
const { isLoggedIn, customRole } = require('../middlewares/user');

router.route('/testproduct').get();

module.exports = router;
