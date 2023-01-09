import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Header from "./header";
import { addToCart, removeFromCart } from "../actions/index.js";



const CheckoutPage = () => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [products, setProducts] = useState();
    
    const person =  useSelector((state) => state.UserStatus);
    person.then((Name)=> setUser(Name));

    const getAllProducts = async() => {
        const {data} = await axios.get('/api/v1/product');
        if(data.products){
        setProducts(data.products)
        }
    }
    // console.log(user);

    useEffect(()=>{
        getAllProducts();
    },[])


let totalPrice = 0;

if(products){
    products.map((item,i)=>(

        totalPrice += Math.floor(item.price-(item.price/item.discountPercentage))
    ))
}


return(
    <>
<div className="bg-gray-200 min-h-screen">
<Header/>
{user && user != 'Guest'?(<div className="flex flex-row-reverse ">

<div className="w-1/3 my-20 text-center">
    <div className="flex flex-col items-center gap-6">
    <span>Total cost of Cart : ${totalPrice}</span>
    <button className="p-2 bg-gray-700 text-gray-100 font-bold rounded-md w-24 hover:bg-blue-600 ">Buy Now</button>
    </div>
</div>

<div className="w-2/3 flex flex-wrap justify-center items-center mt-16">
    {products && products.map((item,i)=>(
        <>
    <div className="w-full h-auto p-2 mx-4" key={item._id}>
    <div className="bg-white shadow-lg hover:shadow-xl rounded-lg flex">
      <div className="bg-gray-400 h-64 w-64 rounded-lg p-2 bg-no-repeat bg-center bg-cover align-center">
        <img src={item.thumbnail} className="w-full h-full rounded-md"/>
       
      </div>
      <div className="px-2 pt-2 w-2/3 flex flex-col mt-4">
        <div className="p-2 flex justify-between">
            
          <div className="p-2">
          <h1 className="font-medium text-xl font-poppins">{item.title}</h1>
          <p className="text-gray-500 font-nunito">{item.description}</p></div>
          <div className="p-2">
          <div className="text-teal-500 font-semibold text-lg font-poppins">${Math.floor(item.price-(item.price/item.discountPercentage))}</div>
          <div className="text-xs text-gray-500 line-through font-poppins">${item.price}</div>
        </div>
        </div>
        <div className="p-4">
          <div className="flex gap-4 items-center font-semibold text-lg font-poppins">
            <button className="bg-gray-400 text-white text-2xl py-2 px-4 rounded-md">-</button>
            <span className="text-teal-500 font-semibold text-lg font-poppins">{0}</span>
            <button className="bg-gray-400 text-white text-2xl py-2 px-4 rounded-md">+</button>
          
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
        
    ))}
  
</div>

</div>):(
<div className="w-100 mx-auto py-20">
    <a onClick={()=>{navigate('/login')}}> Login First to See this page </a>
</div>
)}



</div>
    
</>
)
}


export default CheckoutPage;