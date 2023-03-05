/* En los servicios va la logica de programacion */
const faker = require("faker");
const boom = require("@hapi/boom");

const getAllProducts = async (req, res) => {
  try {
    const products = await [];
    const { size } = await req.query;
    const limit = (await size) || 5;
    for (let index = 0; index < limit; index++) {
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }

    return products;
  } catch (error) {
    console.log(error);
  }
};

const createNewProducts = async (req, res) => {
  try {
    const body = await req.body;
    console.log(body);
    res.json({
      ok: true,
      data: body,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = await req.params;
    if (id != 1) {
      throw boom.notFound("No funciona/ not fuound");
    }
    const body = await req.body;
    res.json({
      message: "update success",
      product: body,
      id,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = await req.params;
    res.json({
      message: "Delete success",
      id,
    });
  } catch (error) {
    console.log(error);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const { id } = await req.params;
    res.json({
      id: id,
      name: "Teclado",
      price: 2000,
      category: "gamer",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  createNewProducts,
  updateProduct,
  deleteProduct,
  getOneProduct,
};
