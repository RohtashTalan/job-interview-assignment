import mongoose from 'mongoose';
import { Jwt } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';



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


userSchema.methods

export default mongoose.model(User,userSchema);