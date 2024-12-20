import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCLOUDINARY from './config/cloudinary.js';
import userRouter from './routes/users.js';
import productRouter from './routes/products.js';


////const express = require('express');
//app config
const app = express();
const PORT = process.env.PORT||4000;
connectDB();
connectCLOUDINARY();


//middleware
app.use(express.json());
app.use(cors());

//require('./routes')(app)


//api endpoints

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);


app.get('/',(req,res)=>{
res.send("api working")
});




app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});