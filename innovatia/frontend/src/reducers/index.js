import UpdateTheCart from "./cart.js";
import { combineReducers } from "redux";
import UserStatus from "./user.js";



const rootReducer = combineReducers({
    UpdateTheCart,
    UserStatus
})


export default rootReducer;