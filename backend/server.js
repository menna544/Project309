import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCLOUDINARY from './config/cloudinary.js';
import userRouter from './routes/users.js';


////const express = require('express');
//app config
const app = express();
const PORT = process.env.PORT||4000;
connectDB();
connectCLOUDINARY();


// const mongoose = require('mongoose');

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://bassantnaser:1234@main.xgtdr.mongodb.net/?retryWrites=true&w=majority&appName=main',{ useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log('MongoDB connection error:', err));

//middleware
app.use(express.json());
app.use(cors());

//require('./routes')(app)


//api endpoints

app.use('/api/user', userRouter);


app.get('/',(req,res)=>{
res.send("api working")
});




app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});