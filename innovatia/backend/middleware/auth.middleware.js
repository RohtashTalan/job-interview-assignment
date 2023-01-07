import  Jwt from "jsonwebtoken";
import User from '../schema/users.schema.js';
import config from "../config/index.js";
import CustomError from "../utils/customError.js";
import asyncHandler from "../utils/asyncHandler.js";


export const isLoggedIn = asyncHandler(async(req, res, next) => {
    
    let token = req.cookies.token || req.header("Authorization");

    if (!token){ throw new CustomError('Login first to access this page', 401)}

    const decoded = Jwt.verify(token, config.JWT_TOKEN);
    req.user = await User.findById(decoded._id);
    next();

})