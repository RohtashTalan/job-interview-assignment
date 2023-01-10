import Cart from '../schema/cart.schema.js';
import Product from '../schema/product.schema.js';
import asyncHandler from '../utils/asyncHandler.js';
import CustomError from '../utils/customError.js';


export const getProducts = asyncHandler(async(req, res, next) => {

    const products = await Cart.findOne({user:req.user._id}); // req.user added into req body by authentication middleware

    if(!products){throw new CustomError("No Product in Cart", 404)}

    let newArray = [];

    for (let index = 0; index < products.productArray.length; index++) {
      let itemDetails = await Product.findById(products.productArray[index].productId);
      let obj = {
        productId:products.productArray[index].productId,
        count:products.productArray[index].count,
        title:itemDetails.title,
        description:itemDetails.description,
        price:itemDetails.price,
        discountPercentage:itemDetails.discountPercentage,
        brand:itemDetails.brand,
        category:itemDetails.category,
        thumbnail:itemDetails.thumbnail,
      };
      newArray.push(obj);
    }


    products.productArray = newArray;

    res.status(200).json({
        success: true,
        productArray: newArray,
    })

})

// add product to cart
export const addProduct = asyncHandler( async(req, res, next) => {
    const productId = req.params.productId;
    const userId = req.user._id;

    const isCart = await Cart.findOne({user:userId});

    if(!isCart){
        const addIntoCart = await Cart.create({user:userId, productArray:[{productId, count:1}]})
    }else{
        let itemPresent = false;
       isCart.productArray.map((item)=>{
            if(item.productId == productId){
                item.count += 1;
                itemPresent = true;
            }
        });

        if(!itemPresent){
            isCart.productArray.push({productId, count:1});
        }
        await isCart.save();
    }
   
    res.status(200).json({
        success:true,
        message: "Product added successfully"
    })


})



// remove product to cart
export const removeProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.productId;
  const userId = req.user._id;

  const isCart = await Cart.findOne({ user: userId });

  if (!isCart) {
    const addIntoCart = await Cart.create({ user: userId });
  } else {
    let newArray = isCart.productArray.filter((item) => {
      if(item.count > 1 && item.productId == productId){
        item.count -= 1;
        return item;
      } else if(item.count == 1 && item.productId == productId){
        return item.productId != productId;
      } else{
        return item;
      }
    });

    isCart.productArray = newArray;

    await isCart.save();
  }

  res.status(200).json({
    success: true,
    message: "Product removed successfully",
  });
});