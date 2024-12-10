const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Registration",
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  },
  certificate: {
    type: String, // Store the binary data of the certificate
    required: true,
  },
}, { timestamps: true });

const Achievement = mongoose.model("Achievement", achievementSchema);

module.exports = Achievement;
