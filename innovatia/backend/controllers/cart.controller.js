import Cart from '../schema/cart.schema.js';
import asyncHandler from '../utils/asyncHandler.js';
import CustomError from '../utils/customError.js';


export const getProducts = asyncHandler(async(req, res, next) => {

    const products = await Cart.findOne({user:req.user._id}); // req.user added into req body by authentication middleware

    if(!products){throw new CustomError("No Product in Cart", 404)}


    res.status(200).json({
        success: true,
        products
    })

})

// add product to cart
export const addProduct = asyncHandler( async(req, res, next) => {
    const productId = req.params.productId;
    const userId = req.user._id;

    const addIntoCart = await Cart.create({user:userId, productArray:[{productId, count:1}]})
    


})
// remove product to cart
export const removeProduct = asyncHandler( async(req, res, next) => {
    const productId = req.params.productId;
    const userId = req.user._id;
    const addIntoCart = await Cart.create({user:userId, productArray:[{productId, count:1}]})

})