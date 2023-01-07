import mongoose from "mongoose";



const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  productArray: {
    type: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        count: Number,
        price: Number,
      },
    ],
    required: true,
  },
});

export default mongoose.model("Cart", cartSchema);
