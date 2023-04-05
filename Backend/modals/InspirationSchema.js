const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Inspirations = new Schema({
    title: String,
    img: String,
    key: String
})

const InspirationsModal = mongoose.model('Inspirations', Inspirations);

module.exports = InspirationsModal;