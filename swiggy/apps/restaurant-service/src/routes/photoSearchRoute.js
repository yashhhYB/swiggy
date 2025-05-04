const express = require('express');
const multer = require('multer');
const { classifyDish } = require('../controllers/dishClassifier');
const { getRestaurants } = require('../controllers/restaurantController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/photo-search', upload.single('photo'), async (req, res) => {
    try {
        const dishName = await classifyDish(req.file.path);
        const restaurants = await getRestaurants(dishName);

        res.json({ results: restaurants });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

module.exports = router;
