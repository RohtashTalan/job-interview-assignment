
export const addToCart = (productId) => {
    return {
    type: "ADD_TO_CART",
    payload: productId
}}
export const removeFromCart = (productId) => {
    return { 
        type: "REMOVE_FROM_CART",
        payload: productId
}}


export const userSignOut = () => {
    return { 
        type: "SIGN_OUT_USER"
}}
export const userSignUp = (user) => {
    return { 
        type: "SIGN_UP_USER",
        payload: user
}}
export const userSignIn = (user) => {
    return { 
        type: "SIGN_IN_USER",
        payload: user
}}