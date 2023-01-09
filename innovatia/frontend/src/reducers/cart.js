import axios from "axios";

const initialState = 0 ;


const updateTheCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      (async function() {
        let response = await axios.get(`/api/v1/cart/add/${action.payload}`);
        if(response.status === 200){
          console.log(response);
        }
      })();
      return state + 1;
    }
    case "REMOVE_FROM_CART": {
      if (!(state <= 0)) {
        (async function() {
          let response = await axios.get(`/api/v1/cart/remove/${action.payload}`);
          if(response.status === 200){
            console.log(response);
          }
        })();
        return state - 1;
      }
      return 0;
    }
    break;
    default:
      return state;
  }
};


export default updateTheCart;