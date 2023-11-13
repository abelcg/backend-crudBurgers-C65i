import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
  productName: {
    require: true,
    type: String,
    minlenght: 2,
    maxlenght: 100,
    unique: true,
  },
  price: {
    type: String,
    required: true,
    min: 0,
    max: 10000,
  },
  urlImg: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('product', productSchema);

export default Product;
