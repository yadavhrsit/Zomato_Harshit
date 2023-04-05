const NightlifeCollections = require('../modals/NightlifeCollectionSchema');

async function postNightlifeCollections(req, res) {
    const NightlifeCollection = new NightlifeCollections({
        title: req.body.title,
        img: req.body.img,
        count: req.body.count
    });
    try {
        const result = await NightlifeCollection.save();
        res.send(`Nightlife Collections added successfully: ${result}`);

    } catch {
        (err) => {
            res.send(err);
            console.log('Error in adding the Nightlife Collections');
        }
    }
}

module.exports = postNightlifeCollections;