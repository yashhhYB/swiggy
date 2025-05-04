const mongoose = require('mongoose');
const Restaurant = require('../../restaurant-service/src/models/restaurantModel');

const getRestaurants = async (dishName) => {
    return await Restaurant.find({ servedDishes: dishName });
};

module.exports = { getRestaurants };
