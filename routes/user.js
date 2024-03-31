const express = require("express");
const router = express.Router();
const { authenticateUser } = require('../controllers/middlewares');

const {login, signup} = require("../controllers/auth");
const {addProduct, getAllProducts} = require('../controllers/product');
const {addOrder,getUserOrders} = require('../controllers/Order');

router.post("/login",login);
router.post("/signup",signup);

router.get('/product',getAllProducts);
router.post('/product',addProduct);

router.post('/order',authenticateUser,addOrder);
router.get('/order',authenticateUser,getUserOrders)



module.exports = router;