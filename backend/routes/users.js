const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/', async (req, res) => {
    const { name, password } = req.body;

    let user = await User.findOne({ name });

    if (user) return res.status(400).send('name already taken');

    user = new User({ username, password });
    await user.save();
    return res.send(await user.genAuthToken());
});


module.exports = router;