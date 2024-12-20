import mongoose from "mongoose";
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    price: {
        type: Number,
        required: true,
       
    },
    image: {
        type:Array,
        required:true
    }
});
 
const productModel = mongoose.models.product || mongoose.model("product",productSchema);
export default productModel;