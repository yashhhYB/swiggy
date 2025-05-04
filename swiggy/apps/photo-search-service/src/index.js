const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const photoSearchRoute = require('./routes/photoSearchRoute');

const app = express();
const upload = multer({ dest: 'uploads/' });

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/swiggy';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

app.use('/api', photoSearchRoute);

app.listen(PORT, () => {
    console.log(`Photo Search Service running on port ${PORT}`);
});
