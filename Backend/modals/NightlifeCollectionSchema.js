const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NightlifeCollections = new Schema({
    img: String,
    title: String,
    count: String
})

const NightlifeCollectionsModal = mongoose.model('NightlifeCollections', NightlifeCollections);

module.exports = NightlifeCollectionsModal;