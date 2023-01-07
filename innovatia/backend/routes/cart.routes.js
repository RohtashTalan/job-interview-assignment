import  express  from "express";
import {isLoggedIn} from '../middleware/auth.middleware.js';
const router = express.Router();

import { getProducts } from "../controllers/cart.controller.js";


router.route('/').get(isLoggedIn, getProducts);




export default router;