const express = require('express');
const multer = require('multer');
const { classifyDish } = require('../controllers/dishClassifier');
const { getRestaurants } = require('../controllers/restaurantController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/photo-search', upload.single('photo'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No photo uploaded' });
        }
        const dishName = await classifyDish(req.file.path);
        if (!dishName) {
            return res.status(404).json({ error: 'Dish could not be classified' });
        }
        const restaurants = await getRestaurants(dishName);
        if (!restaurants || restaurants.length === 0) {
            return res.status(404).json({ error: 'No restaurants found for this dish' });
        }
        res.json({ results: restaurants });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
});

module.exports = router;
