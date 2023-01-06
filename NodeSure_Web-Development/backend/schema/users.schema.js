import mongoose from 'mongoose';
import Jwt  from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config';



const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is requried']
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    mobile: {
        type: Number,
    }
});

// encrypted password hook
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})


userSchema.methods = {
    comparePassword: async function(enteredPassword){
        return await bcrypt.compare(enteredPassword,this.password)
    },

    getJwtToken: function() {
        return Jwt.sign({_id:this._id}, config.JWT_TOKEN, {expiresIn: config.JWT_EXPIRY})
    },
    
}


export default mongoose.model(User, userSchema);