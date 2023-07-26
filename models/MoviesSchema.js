const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    language: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("movie", MovieSchema);
