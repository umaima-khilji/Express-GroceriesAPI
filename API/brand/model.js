const { Schema, model } = require('mongoose');

const BrandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  
  image: {
    type: String,
    required: true,}
});

const Brand = model('brand', BrandSchema);
module.exports = Brand;
