import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";



const CheckoutPage = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState();

    
    const signOutUser = async() =>{
        navigate("/");
    } 
    
    useEffect(() => {

    }, []);

return(
    <>
{userDetails ? (
<div className="bg-gray-200 h-screen">
<Header/>
     {/* Footer  */}
     <footer className="bg-gray-900 p-4 w-full h-16">
            <div>

            </div>
        </footer>
    </div>
    ):(<div className="font-bold text-blue-700 bg-gray-200 w-screen h-screen flex">
        <a href="/" className="text-center mx-auto p-12">SignIn First</a>
    </div>)

}
</>
)
}


export default CheckoutPage;