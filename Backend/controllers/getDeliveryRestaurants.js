const DeliveryRestaurantsModal = require("../modals/DeliveryRestaurantSchema");

async function getDeliveryRestaurants(req, res) {
    const DeliveryRestaurants = await DeliveryRestaurantsModal.find({
    }, { _id: 0 })
    res.send(DeliveryRestaurants);
}

module.exports = getDeliveryRestaurants;