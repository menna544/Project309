import {v2 as cloudinary} from 'cloudinary'



const connectCLOUDINARY = ()=>{
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    cloud_key:process.env.CLOUDINERY_API_KEY,
    api_secret:process.env.CLOUDINERY_SECRET_KEY
})
}

export default connectCLOUDINARY;