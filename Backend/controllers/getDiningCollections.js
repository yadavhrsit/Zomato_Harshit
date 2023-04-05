const DiningCollectionsModal = require("../modals/DiningCollectionSchema");

async function getDiningCollections(req, res) {
    const DiningCollections = await DiningCollectionsModal.find({
    }, { _id: 0 })
    res.send(DiningCollections);
}

module.exports = getDiningCollections;