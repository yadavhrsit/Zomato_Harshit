const NightlifeCollectionsModal = require("../modals/NightlifeCollectionSchema");

async function getNightlifeCollections(req, res) {
    const NightlifeCollections = await NightlifeCollectionsModal.find({
    }, { _id: 0 })
    res.send(NightlifeCollections);
}

module.exports = getNightlifeCollections;