const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubHeaderItems = new Schema({
    title: String,
    activeImg: String,
    inactiveImg: String,
})

const SubHeaderItemsModal = mongoose.model('SubHeaderItems', SubHeaderItems);

module.exports = SubHeaderItemsModal;