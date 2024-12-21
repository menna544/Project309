import jwt, { decode } from 'jsonwebtoken';
 const admainAuth =(req,res,next)=>{
try {
    const {token}= res.headers
    if(!token){
        return res.json({success:false,message:"not autherized login again "})

    }

    if (token_decode !==process.env.ADMAIN_EMAIL +process.env.ADMAIN_PASSWORD) {
        return res.json({success:false,message:"not autherized login again "})

    }
    next();
const token_decode = jwt.verify(token,process.env.JWT_SECREAT)

} catch (error) {
    console.log(error)
    res.json({success:false,message:"invaled cordenations"})

}
 }

 export default admainAuth;