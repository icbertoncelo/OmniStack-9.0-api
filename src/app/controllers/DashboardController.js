const { Spot } = require('../models');

class DashboardController {
  async show(req, res) {
    const spots = await Spot.find({ user: req.userId });

    return res.json(spots);
  }
}

module.exports = new DashboardController();
