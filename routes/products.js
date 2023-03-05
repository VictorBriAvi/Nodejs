const express = require("express");
const { validatorHendler } = require("../middleware/validator");
const {
  shemaGetProduct,
  shemaProductCreate,
  shemaUpdateProduct,
} = require("../schema/schemaProduct");
const productsServices = require("../services/ServicesProducts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await productsServices.getAllProducts(req, res);
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHendler(shemaProductCreate, "body"),
  async (req, res) => {
    const createProduct = await productsServices.createNewProducts(req, res);
    return createProduct;
  }
);

router.patch(
  "/:id",
  validatorHendler(shemaGetProduct, "params"),
  validatorHendler(shemaUpdateProduct, "body"),
  async (req, res) => {
    const updateProduct = await productsServices.updateProduct(req, res);
    return updateProduct;
  }
);

router.delete("/:id", async (req, res) => {
  const updateDeleteProduct = await productsServices.updateProduct(req, res);
  return updateDeleteProduct;
});

router.get(
  "/:id",
  validatorHendler(shemaGetProduct, "params"),
  async (req, res) => {
    const getOneProduct = await productsServices.getOneProduct(req, res);
    return getOneProduct;
  }
);

module.exports = router;
