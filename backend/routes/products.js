import express from 'express';
import { addProduct, removeProduct, singleProduct } from '../controllers/productController.js';
import upload from '../middleware/multer.js';

const productRouter = express.Router();

// POST route to add a product
productRouter.post('/add', upload.fields([
  { name: 'image1', maxCount: 1 }
]), addProduct);

// POST route to remove a product
productRouter.post('/remove', removeProduct);

// GET route to fetch a single product by productId
productRouter.get('/single/:productId', singleProduct);

export default productRouter;
