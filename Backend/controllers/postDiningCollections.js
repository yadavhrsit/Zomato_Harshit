const DiningCollections = require('../modals/DiningCollectionSchema');

async function postDiningCollections(req, res) {
    const DiningCollection = new DiningCollections({
        img: req.body.img,
        title: req.body.title,
        count: req.body.count
    });
    try {
        const result = await DiningCollection.save();
        res.send(`Dining Collections added successfully: ${result}`);

    } catch {
        (err) => {
            res.send(`Error in adding the Dining Collections : ${err}`);

        }
    }
}

module.exports = postDiningCollections;