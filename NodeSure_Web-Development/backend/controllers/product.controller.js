import Product from '../schema/product.schema.js';
import asyncHandler from '../utils/asyncHandler.js';


export const getProducts = asyncHandler(async(req, res, next) => {

    const products = await Product.find({});

    res.status(200).json({
        products
    })

})