import Product from '../schema/product.schema.js';
import asyncHandler from '../utils/asyncHandler.js';
import CustomError from '../utils/customError.js';


export const getProducts = asyncHandler(async(req, res, next) => {
    const products = await Product.find({});
    if(!products){throw new CustomError("No Product found", 404)}
    res.status(200).json({
        success: true,
        products
    })

})