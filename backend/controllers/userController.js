import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (id)=>{
return jwt.sign({id},process.env.JWT_SECREAT)
}


// route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }

        // Compare provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id);
            // Send response with token, email, and name
            res.json({ success: true, token, email: user.email, name: user.name });
        } else {
            res.json({ success: false, message: "Invalid password" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};



//route for user register
const registerUser = async (req, res) => {
    try {
        const { email, password, name } = req.body;

        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists", email,name });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter a valid email" });
        }

        // Ensure the name is provided and not null
        if (!name) {
            return res.json({ success: false, message: "Name is required" });
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new userModel({
            email,
            password: hashedPassword,
            name // Make sure 'name' is included here
        });

        const user = await newUser.save();
        const token = createToken(user._id);

        // Send response including the email and token
        res.json({ success: true, token, email: user.email ,name:user.name});
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


//route for admain login
const loginAdmain = async(req,res)=>{
    try {
    const {email,password} = req.body
    if (email === process.env.ADMAIN_EMAIL && password === process.env.ADMAIN_PASSWORD){
        const token = jwt.sign(email+password,process.env.JWT_SECREAT)
        res.json({success:true,token} )
    }

    
} catch (error) {
    console.log(error)
        res.json({success:false,message:"invaled cordenations"}

        )
    }
}

export {loginUser, registerUser,loginAdmain} ;