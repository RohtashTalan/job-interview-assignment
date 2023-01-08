import  express  from "express";
const router = express.Router();

import { isUserLoggedIn, signIn, signOut, signUp } from "../controllers/user.controller.js";


router.route('/signup').post(signUp);
router.route('/signin').post(signIn);
router.route('/signout').get(signOut);
router.route('/isloggedin').get(isUserLoggedIn);




export default router;