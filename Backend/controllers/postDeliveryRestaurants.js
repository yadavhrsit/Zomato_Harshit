const DeliveryRestaurants = require('../modals/DeliveryRestaurantSchema');

async function postDeliveryRestaurants(req, res) {
    const DeliveryRestaurant = new DeliveryRestaurants({
        title: req.body.title,
        img: req.body.img,
        rating: req.body.rating,
        categories: req.body.categories,
        price: req.body.price,
        offer: req.body.offer,
        time: req.body.time
    });
    try {
        const result = await DeliveryRestaurant.save();
        res.send(`Delivery Restaurants added successfully: ${result}`);

    } catch {
        (err) => {
            res.send(err);
            console.log('Error in adding the Delivery Restaurants');
        }
    }
}

module.exports = postDeliveryRestaurants;