const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiningRestaurant = new Schema({
    title: String,
    img: String,
    rating: String,
    categories: String,
    price: String,
    time: String,
    location: String
})

const DiningRestaurantModal = mongoose.model('DiningRestaurant', DiningRestaurant);

module.exports = DiningRestaurantModal;