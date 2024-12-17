
const express = require('express');
const app = express();



const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://bassantnaser:1234@main.xgtdr.mongodb.net/?retryWrites=true&w=majority&appName=main',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

app.use(express.json());
require('./routes')(app)


const PORT = 6000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});