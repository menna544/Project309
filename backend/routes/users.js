import express from 'express';
import { loginUser,registerUser,loginAdmain } from '../controllers/userController.js';
const userRouter = express.Router();
// const User = require('../models/User');

userRouter.post('/register',registerUser )
userRouter.post('/login',loginUser )
userRouter.post('/admain-login',loginAdmain )

export default userRouter;

// userRouter.post('/', async (req, res) => {
//     const { name, password } = req.body;

//     let user = await User.findOne({ name });

//     if (user) return res.status(400).send('name already taken');

//     user = new User({ username, password });
//     await user.save();
//     return res.send(await user.genAuthToken());
// });


// module.exports = router;