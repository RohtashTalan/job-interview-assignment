import User from '../schema/users.schema.js';
import CustomError from '../utils/customError.js';
import asyncHandler from '../utils/asyncHandler.js';


// SignUP Controller
export const signUp = asyncHandler(async (req, res, next)=>{
    const {name, username, password} = req.body;

    if(!name || !username || !password){
        throw new CustomError('All field are required is requried', 401)
    }

    const newUser = {
        name,
        username,
        password
    };

    const createUser = await User.create(newUser);
    

    if(!createUser){
        throw new CustomError('Entered information is wrong', 401)
    }

    const token = createUser.getJwtToken();

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
  
    res.status(200).cookie("token", token, options).json({
     success:true,
     token,
     createUser
    });

})



// SignIN Controller
export const signIn = asyncHandler( async (req, res, next)=>{
    const {username, password} = req.body;

    if(!username || !password){
        throw new CustomError('UserName and password is requried', 401)
    }

    const user = await User.findOne({username:username});


    if (!user) {
        res.cookie("token",'',{expires: new Date(Date.now())})
        throw new CustomError('User not Found', 401)
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if(!isPasswordCorrect){
        res.cookie("token",'',{expires: new Date(Date.now())})
        throw new CustomError('Entered Details not matched with our database', 401)
    }

    const token = user.getJwtToken();

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    user.password=null;
  
    res.status(200).cookie("token", token, options).json({
     success:true,
     token,
     user
    });

})