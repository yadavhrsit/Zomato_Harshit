const TopBrandsModal = require("../modals/TopBrandSchema");

async function getTopBrands(req, res) {
    const TopBrands = await TopBrandsModal.find({
    }, { _id: 0 })
    res.send(TopBrands);
}

module.exports = getTopBrands;