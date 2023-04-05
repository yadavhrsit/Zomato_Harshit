const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NightlifeRestaurants = new Schema({
    title: String,
    img: String,
    rating: String,
    categories: String,
    price: String,
    time: String,
    location: String
})

const NightlifeRestaurantsModal = mongoose.model('NightlifeRestaurants', NightlifeRestaurants);

module.exports = NightlifeRestaurantsModal;