const NightlifeRestaurantsModal = require("../modals/NightlifeRestaurantSchema");

async function getNightlifeRestaurants(req, res) {
    const NightlifeRestaurants = await NightlifeRestaurantsModal.find({
    }, { _id: 0 })
    res.send(NightlifeRestaurants);
}

module.exports = getNightlifeRestaurants;