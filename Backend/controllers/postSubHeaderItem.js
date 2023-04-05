const SubHeaderItems = require('../modals/SubHeaderItemSchema');

async function postSubHeaderItems(req, res) {
    const SubHeaderItem = new SubHeaderItems({
        title: req.body.title,
        activeImg: req.body.img,
        inactiveImg: req.body.img,
    });
    try {
        const result = await SubHeaderItem.save();
        res.send(`Sub Header Item added successfully: ${result}`);

    } catch {
        (err) => {
            res.send(`Error in adding the Sub Header Item : ${err}`);
        }
    }
}

module.exports = postSubHeaderItems;