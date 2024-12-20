import{v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js'



//add product
const addProduct =async(req,res)=>{
try {
    const {name,price}= req.body
    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3 && req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]
    
    const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)

    let imagesUrl= await Promise.all(
        images.map(async (item)=>{
         let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'} )
         return result.secure_url
        })
    )
    // console.log(name,price)
    // console.log(imagesUrl)

    const productData = {
    name,
    price:Number(price),
    image:imagesUrl
    }

    console.log(productData)
    const product= new productModel(productData)
    await product.save()
    res.json({success:true,message:"product added"})
} catch (error) {
    console.log(er)
    res.json({success:false,message:error.message})
}
};




//remove product
const removeProduct =async(req,res)=>{
try {
    await productModel.findByIdAndDelete(req.body.id)
    res.json({success:true,message:"product removed"})
} catch (error) {
    console.log(error)
        res.json({success:false,message:error.message})
}
}


//single product
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ success: false, message: 'Product ID is required.' });
        }

        const product = await productModel.findById(productId);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found.' });
        }

        res.status(200).json({ success: true, product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};
export {addProduct,removeProduct,singleProduct}