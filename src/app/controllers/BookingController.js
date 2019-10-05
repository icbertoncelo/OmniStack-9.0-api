const { Booking } = require('../models');

class BookingController {
  async store(req, res) {
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: req.userId,
      spot: spot_id,
      date,
    });

    await booking
      .populate('user')
      .populate('spot')
      .execPopulate();

    return res.json(booking);
  }
}

module.exports = new BookingController();
