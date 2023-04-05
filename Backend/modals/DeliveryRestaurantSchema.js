const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeliveryRestaurant = new Schema({
    title: String,
    img: String,
    rating: String,
    categories: String,
    price: String,
    offer: String,
    time: String
})

const DeliveryRestaurantModal = mongoose.model('DeliveryRestaurant', DeliveryRestaurant);

module.exports = DeliveryRestaurantModal;