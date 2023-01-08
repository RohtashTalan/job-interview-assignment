import  express  from "express";
import {isLoggedIn} from '../middleware/auth.middleware.js';
const router = express.Router();

import { addProduct, getProducts, removeProduct } from "../controllers/cart.controller.js";


router.route('/').get(isLoggedIn, getProducts);
router.route('/add/:productId').get(isLoggedIn, addProduct);
router.route('/remove/:productId').get(isLoggedIn, removeProduct);




export default router;