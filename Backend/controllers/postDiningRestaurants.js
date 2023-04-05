const DiningRestaurants = require('../modals/DiningRestaurantSchema');

async function postDiningRestaurants(req, res) {
    const DiningRestaurant = new DiningRestaurants({
        title: req.body.title,
        img: req.body.img,
        rating: req.body.rating,
        categories: req.body.categories,
        price: req.body.price,
        time: req.body.time,
        location: req.body.location
    });
    try {
        const result = await DiningRestaurant.save();
        res.send(`Dining Restaurants added successfully: ${result}`);

    } catch {
        (err) => {
            res.send(err);
            console.log('Error in adding the Dining Restaurants');
        }
    }
}

module.exports = postDiningRestaurants;