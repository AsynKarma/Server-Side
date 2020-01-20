const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.getAddProducts);
router.post('/add-product', adminController.postProduct);
router.get('/products', adminController.getProducts);

module.exports = router;