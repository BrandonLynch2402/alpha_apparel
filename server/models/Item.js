const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: String,
  stock: Number,
  price: String,
  img: String,
  colors: Array
})

module.exports = Item = mongoose.model('item', ItemSchema);