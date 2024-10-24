const mongoose = require("mongoose");

const travelLogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    rating: { type: Number, default: 0 },
    dateVisited: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
});

const TravelLog = mongoose.model("TravelLog", travelLogSchema);

module.exports = TravelLog;
