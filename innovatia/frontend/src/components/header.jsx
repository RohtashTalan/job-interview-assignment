import { useSelector } from "react-redux";


const Header = () =>{

const cartItems = useSelector((state) => state.updateTheCart);

    return (<header className="h-18 fixed w-full top-0">
    <nav className="bg-gray-900 text-white p-4">
        <div className="flex justify-between text-3xl">
        <div>Logo</div>

         <div>
            <i className="fa-solid fa-cart-shopping">
            <span className="p-1 bg-red-600 rounded-full text-[12px]  absolute top-2 right-2 ">{cartItems}</span>
         </i>
         {/* {username}  */}
            </div>
        </div>
    </nav>
</header>)
}


export default Header;