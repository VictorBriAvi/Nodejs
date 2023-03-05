const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(10);
const price = Joi.number().integer().min(10);

const shemaProductCreate = Joi.object({
  name: name.required(),
  price: price.required(),
});

const shemaUpdateProduct = Joi.object({
  name: name,
  price: price,
});

const shemaGetProduct = Joi.object({
  id: id.required(),
});

module.exports = {
  shemaGetProduct,
  shemaProductCreate,
  shemaUpdateProduct,
};
