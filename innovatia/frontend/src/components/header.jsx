import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const Header = () =>{
    const [user, setUser] = useState('Guest');
    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.UpdateTheCart);

const isLoggedIn = async () => {
    const response = await axios.get("/api/v1/user/isloggedin");
    console.log(response);
        if(response.status === 200){setUser(response.data.user)}
}

    const signOut = async () =>{
        const response = await axios.get("/api/v1/user/signout");
        if(response.status === 200){setUser('Guest')}
    }

useEffect(()=>{
    isLoggedIn();
},[user])

    return (<header className="h-18 fixed w-full top-0">
    <nav className="bg-gray-900 text-white p-4">
        <div className="flex justify-between text-3xl">
        <div>Logo</div>

         <div className="flex justify-center items-center">
        <div className="text-gray-400 w-auto mx-auto">
        <span><i class="fa-solid fa-user mx-1" onClick={()=>{signOut()}}></i>{user}</span>
        {user == 'Guest'? (<i class="fa-solid fa-right-to-bracket mx-3 hover:cursor-pointer" title="Click to Login" onClick={()=>{navigate('/login')}}></i>):(<i className="fa-solid fa-right-from-bracket mx-3 hover:cursor-pointer" title="Click to Log out" onClick={()=>{signOut()}}></i>)}
         
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