const InspirationsModal = require("../modals/InspirationSchema");

async function getInspirations(req, res) {
    const Inspirations = await InspirationsModal.find({
    }, { _id: 0 })
    res.send(Inspirations);
}

module.exports = getInspirations;