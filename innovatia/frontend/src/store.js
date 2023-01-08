import rootReducer from "./reducers";

import { createStore } from "redux/toolkit";


const store = createStore(rootReducer);


export default store;