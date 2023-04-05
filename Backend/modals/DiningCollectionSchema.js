const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiningCollection = new Schema({
    img: String,
    title: String,
    count: String
})

const DiningCollectionModal = mongoose.model('DiningCollection', DiningCollection);

module.exports = DiningCollectionModal;