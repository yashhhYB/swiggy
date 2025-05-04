const Restaurant = require('../models/restaurantModel');

const getRestaurants = async (dishName) => {
    return await Restaurant.find({ servedDishes: dishName });
};

module.exports = { getRestaurants };
