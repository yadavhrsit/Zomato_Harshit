const Inspirations = require('../modals/InspirationSchema');

async function postInspirations(req, res) {
    const Inspiration = new Inspirations({
        title: req.body.title,
        img: req.body.img
    });
    try {
        const result = await Inspiration.save();
        res.send(`Inspiration added successfully: ${result}`);

    } catch {
        (err) => {
            res.send(err);
            console.log('Error in adding the Inspirations');
        }
    }
}

module.exports = postInspirations;