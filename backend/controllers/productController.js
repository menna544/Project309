import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

// Add product
const addProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];

    const images = [image1].filter((item) => item !== undefined);

    // Upload images to Cloudinary
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      price: Number(price),
      image: imagesUrl
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: 'Product added successfully', product: productData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove product
const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ success: false, message: 'Product ID is required.' });
    }

    await productModel.findByIdAndDelete(id);
    res.json({ success: true, message: 'Product removed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Single product
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.params;  // Use params for productId

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

export { addProduct, removeProduct, singleProduct };
