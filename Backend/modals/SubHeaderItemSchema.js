const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubHeaderItems = new Schema({
    title: {
        type: String,
        required: true
    },
    activeImg: {
        type: String,
        required: true
    },
    inactiveImg: {
        type: String,
        required: true
    }
});

const SubHeaderItemsModal = mongoose.model('SubHeaderItems', SubHeaderItems);

module.exports = SubHeaderItemsModal;