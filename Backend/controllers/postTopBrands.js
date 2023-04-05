const TopBrands = require('../modals/TopBrandSchema');

async function postTopBrands(req, res) {
    const TopBrand = new TopBrands({
        title: req.body.title,
        img: req.body.img,
        time: req.body.time
    });
    try {
        const result = await TopBrand.save();
        res.send(`Top Brand added successfully: ${result}`);

    } catch {
        (err) => {
            res.send(`Error in adding the Top Brand : ${err}`);
        }
    }
}

module.exports = postTopBrands;