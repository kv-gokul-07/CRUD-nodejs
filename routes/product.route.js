const express = require('express');
const { getProducts, updateProduct, getProductId, addProduct, deleteProduct } = require('../controllers/product.controller');
const router = express.Router();

router.post("/", addProduct);
router.get("/", getProducts);
router.get("/:id", getProductId);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;