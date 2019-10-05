const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    aproved: Boolean,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    spot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Spot',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Booking', BookingSchema);
