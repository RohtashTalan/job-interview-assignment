import  express  from "express";
const router = express.Router();

import { signIn, signUp } from "../controllers/user.controller.js";


router.route('/signup').post(signUp);
router.route('/signin').post(signIn);




export default router;