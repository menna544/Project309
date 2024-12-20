import mongoose from "mongoose";

// Connect to MongoDB

    const connectDB = async()=>{
        mongoose.connection.on('connected',()=>{
            console.log("DB connected");
        })    
        await mongoose.connect(`${process.env.MONGODB_URL}/CoffeShop`)
    
}
export default connectDB;

//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log('MongoDB connection error:', err));
