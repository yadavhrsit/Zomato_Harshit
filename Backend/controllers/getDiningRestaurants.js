const DiningRestaurantsModal = require("../modals/DiningRestaurantSchema");

async function getDiningCollections(req, res) {
    const DiningRestaurants = await DiningRestaurantsModal.find({
    }, { _id: 0 })
    res.send(DiningRestaurants);
}

module.exports = getDiningCollections;