import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import { useSelector } from "react-redux";



const CheckoutPage = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.updateTheCart);


return(
    <>
<div className="bg-gray-200 h-screen">
<Header/>
     {/* Footer  */}
     <footer className="bg-gray-900 p-4 w-full h-16">
            <div>

            </div>
        </footer>
    </div>
    
</>
)
}


export default CheckoutPage;