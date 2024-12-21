import mongoose from "mongoose";
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true, // Ensure name is required
        trim: true
    }
});

// userSchema.pre('save', async function (next) {
//     const salt = await bcrypt.genSalt(10);
//     const hashed = await bcrypt.hash(this.password, salt);

//     this.password = hashed;

//     next();
// });


// userSchema.methods.genAuthToken = function () {
//     const token = jwt.sign(this.toJSON(), config.SECRET_KEY)
//     console.log('token: ', token)
    
//     return token;
// };

// userSchema.methods.checkPassword = function(password) {
//     return bcrypt.compare(password, this.password)
// }


const userModel = mongoose.models.user || mongoose.model('user', userSchema);
export default userModel;