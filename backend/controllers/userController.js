import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (id)=>{
return jwt.sign({id},process.env.JWT_SECREAT)
}

//route for user login
const loginUser = async(req,res)=>{

try {
    const{name,password}=req.body;
    const user = await userModel.findOne({name})
    if(!user){
        return res.json({success:false,message:"user does not exist"})
       
    }
    const isMatch = bcrypt.compare(password,user.password);
    if (isMatch) {
        const token = createToken(user._id)
        res.json({success:true,token})
    }
    else{
        res.json({success:false,message:"invalled"})
    }

} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}

}



//route for user register
const registerUser = async(req,res)=>{
//res.json({msg:"register api working"})
try {
    const{name,email,password}=req.body;

    //checking user already exist


const exists = await userModel.findOne({email});
if(exists){
    return res.json({success:false,message:"user is already exist"})
}

if(!validator.isEmail(email)){
    return res.json({success:success,message:"enter valied e-mail"})
}
//hashing user passward
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,salt);
const newUser = new userModel({
    name,
    email,
    password:hashedPassword
})

const user = await newUser.save();
const token = createToken(user._id)
res.json({success:true,token})


} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}
}

//route for admain login
const loginAdmain = async(req,res)=>{

}

export {loginUser, registerUser,loginAdmain} ;