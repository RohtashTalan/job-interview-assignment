import React,{ useEffect, useState } from "react";
import axios from "axios";
import Header from "./header";




const Products = () =>{
    const [products, setProducts] = useState()

    const getAllProducts = async() => {
        const {data} = await axios.get('/api/v1/product');

        if(data.products){
        setProducts(data.products)
        
        console.log(products);
        }
    }

    useEffect(()=>{
        getAllProducts();
    },[])
    return(<>
<Header/>
<div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 mt-16">
    {products && products.map((item,i)=>(
        <>
    <div className="w-full md:w-1/3 p-2" key={i}>
    <div className="bg-white shadow-lg hover:shadow-xl rounded-lg ">
      <div className="bg-gray-400 h-64 w-full rounded-t-lg p-4 bg-no-repeat bg-center bg-cover align-center">
        <img src={item.thumbnail} className="w-full h-full rounded-md"/>
       
      </div>
      <div className="flex justify-between items-start px-2 pt-2">
        <div className="p-2 flex-grow">
          <h1 className="font-medium text-xl font-poppins">{item.title}</h1>
          <p className="text-gray-500 font-nunito">{item.description}</p>
        </div>
        <div className="p-2 text-right">
          <div className="text-teal-500 font-semibold text-lg font-poppins">${Math.floor(item.price-(item.price/item.discountPercentage))}</div>
          <div className="text-xs text-gray-500 line-through font-poppins">${item.price}</div>
        </div>
      </div>
      <div className="flex justify-center items-center px-2 pb-2">
        <div className="w-1/2 p-2">
          <button className="block w-full bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium">
            <svg viewBox="0 0 24 24" className="inline w-4 h-4">
              <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
            </svg> Details
          </button>
        </div>
        <div className="w-1/2 p-2">
          <button className="block w-full bg-white hover:bg-gray-100 text-teal-500 border-2 border-teal-500 px-3 py-2 rounded uppercase font-poppins font-medium">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
        </>
        
    ))}
  
</div>

    </>)
}



export default Products;