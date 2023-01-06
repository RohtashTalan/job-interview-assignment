import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Dashboard = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState();

    const getProducts = async () => {

        const {data} = await axios.get("/api/v1/products/");
        setProducts(data.products);
        console.log(data.products);
    }
    

    useEffect(() => {
        getProducts();
    }, []);

return(
    <>
{products ? (
<div className="bg-gray-200 h-screen">
    {/* Header  */}
    <header className="h-18">
        <nav className="bg-gray-900 text-white p-4">
            <div className="flex justify-between text-3xl">
            <div>Logo</div>
            </div>
        </nav>
    </header>
<div className="flex justify-center items-center w-full m-auto">
    <ul className="flex gap-20 mx-20 flex-wrap">
        {products.map((product)=>(
<li>
    <div className="card">
    <img src={product.imgUrl}  className='w-[200px]'/>
{product.name}
<span> rs. {product.price}</span>
    </div>
    
</li>
        ))}
       
    </ul>

</div>

     {/* Footer  */}
     <footer className="bg-gray-900 p-4 w-full h-16">
            <div>

            </div>
        </footer>
    </div>
    ):(<div className="font-bold text-blue-700 bg-gray-200 w-screen h-screen flex">
        <a href="/login" className="text-center mx-auto p-12">SignIn First</a>
    </div>)

}
</>
)
}


export default Dashboard;