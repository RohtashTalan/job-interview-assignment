import axios from "axios";

const initialState = 0 ;


const updateTheCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      (async function() {
        let response = await axios.get(`/api/v1/cart/add/${action.payload.productId}`);
        if(response.status === 200){
      return state + 1;
        }
      })();
      return state + 1;
    }
    case "REMOVE_FROM_CART": {
      if (!(state <= 0)) {
        (async function() {
          let response = await axios.get(`/api/v1/cart/remove/${action.payload.productId}`);
          if(response.status === 200){
            console.log(response);
          }
        })();

        return state - 1;
      }
      return 0;
    }
    case "CART_ITEM_COUNT": {
        if(action.payload.count !== 0){
          return action.payload.count;
        }
      return 0;
    }
    default:
      return state;
  }
};


export default updateTheCart;