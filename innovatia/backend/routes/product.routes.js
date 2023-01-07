import  express  from "express";
const router = express.Router();

import { getProducts } from "../controllers/product.controller.js";


router.route('/').get(getProducts);




export default router;