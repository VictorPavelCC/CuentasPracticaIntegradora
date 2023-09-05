const mongoose = require("mongoose")


const productCollection = "products"

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: { type: String, required: false },
})

const productModel = mongoose.model(productCollection, productSchema)
module.exports = { productModel }