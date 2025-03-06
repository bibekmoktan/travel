const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
    day: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    activities: [{
      type: String,
    }]
  });

const tourSchema = new mongoose.Schema({
    tour_title: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    difficulty: {
        type: String,
        enum: ["Easy", "Moderate", "Hard"],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    altitude: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    member_size: {
        type: Number,
        required: true,
        min: 1
    },
    seasons: [{
        type: String,
        enum: ['Spring', 'Summer', 'Autumn', 'Winter'],
      }],
      itinerary: [itinerarySchema]
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
