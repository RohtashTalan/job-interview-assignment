import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import React, {useState} from "react";
import { userSignOut } from "../actions/index.js";
import { useEffect } from "react";


const Header = () =>{
    
    const [user, setUser] = useState('Guest');
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const cartItems = useSelector((state) => state.UpdateTheCart);
   const person =  useSelector((state) => state.UserStatus);
   person.then((Name)=> setUser(Name));

   

    return (<header className="h-18 fixed w-full top-0">
    <nav className="bg-gray-900 text-white p-4">
        <div className="flex justify-between text-3xl">
            <div>
       <a  onClick={()=>{navigate('/')}} >Logo </a>
        </div>

         <div className="flex justify-center items-center">
        <div className="text-gray-400 w-auto mx-auto">
        <span><i class="fa-solid fa-user mx-1"></i>{user}</span>
        {user === 'Guest'? (<i className="fa-solid fa-right-to-bracket mx-3 hover:cursor-pointer" title="Click to Login" onClick={()=>{navigate('/login')}}></i>):(<i className="fa-solid fa-right-from-bracket mx-3 hover:cursor-pointer" title="Click to Log out" onClick={()=>{dispatch(userSignOut())}}></i>)}
         
         </div>
            <i className="fa-solid fa-cart-shopping" onClick={()=>{navigate('/checkout')}}>
            <span className="p-1 bg-red-600 rounded-full text-[12px]  absolute top-2 right-2 ">{cartItems}</span>
         </i>
         {/* {username}  */}
            </div>
        </div>
    </nav>
</header>)
}


export default Header;