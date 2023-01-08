
const initialState = 0 ;


const updateTheCart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": return state + 1;
        case "REMOVE_FROM_CART": return state - 1;
        default: return state;
    }
}


export default updateTheCart;