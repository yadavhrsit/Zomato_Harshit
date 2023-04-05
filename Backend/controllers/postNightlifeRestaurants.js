const NightlifeRestaurants = require('../modals/NightlifeRestaurantSchema');

async function postNightlifeRestaurants(req, res) {
    const NightlifeRestaurant = new NightlifeRestaurants({
        title: req.body.title,
        img: req.body.img,
        rating: req.body.rating,
        categories: req.body.categories,
        price: req.body.price,
        time: req.body.time,
        location: req.body.location
    });
    try {
        const result = await NightlifeRestaurant.save();
        res.send(`Nightlife Restaurants added successfully: ${result}`);

    } catch {
        (err) => {
            res.send(err);
            console.log('Error in adding the Nightlife Restaurants');
        }
    }
}

module.exports = postNightlifeRestaurants;