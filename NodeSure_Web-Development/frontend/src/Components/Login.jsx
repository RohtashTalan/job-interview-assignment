import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';



const LoginUser = () =>{
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [loginError, setLoginError]=useState();

    const signInUser = async () => {
try {
  await axios.post('/api/v1/users/login', user);
  
  navigate('/')
} catch (error) {
        setLoginError(error.response.data);
        console.log(error.message);
      }
  }

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        setUser({username, password })
        signInUser();
    }




    return(
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-500 h-screen">
        <div className="text-center font-bold text-2xl">Log in</div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onFocus={()=>{setLoginError('')}}
                    autoComplete
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onFocus={()=>{setLoginError('')}}
                    autoComplete

                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xl text-red-500">
                  {loginError && loginError.message}
                </div>
              </div>

              <div>
                <button
                  type="submit" 
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

    )
}


export default LoginUser;