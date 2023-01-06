import mongoose from 'mongoose';



const productSchema = mongoose.Schema({
    imgUrl:{
        type: String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    price: {
        type: String,
        required: true
    }
});



export default mongoose.model('Product', productSchema);