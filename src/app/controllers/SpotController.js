const { User, Spot } = require('../models');

class SpotController {
  async index(req, res) {
    const { tech } = req.query;

    const techs = await Spot.find({ techs: tech });

    return res.json(techs);
  }

  async store(req, res) {
    const { filename } = req.file;
    const { company, price, techs } = req.body;

    const userExists = await User.findById(req.userId);

    if (!userExists) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    const techsArray = techs.split(',').map(tech => tech.trim());

    const spot = await Spot.create({
      user: req.userId,
      thumbnail: filename,
      company,
      price,
      techs: techsArray,
    });

    return res.json(spot);
  }
}

module.exports = new SpotController();
