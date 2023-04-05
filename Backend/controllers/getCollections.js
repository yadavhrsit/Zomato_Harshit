const CollectionModal = require("../modals/CollectionSchema");

async function getCollections(req, res) {
    const collections = await CollectionModal.find({
    }, { _id: 0 })
    res.send(collections);
}

module.exports = getCollections;