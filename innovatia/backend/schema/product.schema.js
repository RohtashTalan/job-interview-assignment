import mongoose from "mongoose";


const productSchema = mongoose.Schema({
  title:String,
  description:String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: []
});

export default mongoose.model("Product", productSchema);
