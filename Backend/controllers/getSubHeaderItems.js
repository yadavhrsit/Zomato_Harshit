const SubHeaderItemsModal = require("../modals/SubHeaderItemSchema");

async function getSubHeaderItems(req, res) {
    const SubHeaderItems = await SubHeaderItemsModal.find({
    }, { _id: 0, __v: 0 })
    res.send(SubHeaderItems);
}

module.exports = getSubHeaderItems;