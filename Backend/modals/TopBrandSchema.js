const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopBrandSchema = new Schema({
    title: String,
    img: String,
    time: String,
    key: String
})

const TopBrandSchemaModal = mongoose.model('TopBrandSchema', TopBrandSchema);

module.exports = TopBrandSchemaModal;