const MovieSchema = require("../models/MoviesSchema");

const addMovies = async (req, res) => {
  try {
    let movie = new MovieSchema(req.body);
    let result = await movie.save();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("An error occurred.");
  }
};

const findMovies = async (req, res) => {
  try {
    const movies = await MovieSchema.find();
    res.status(200).send(movies);
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch all Movies." });
  }
};

const findSingleMovie = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await MovieSchema.findById(id);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ error: "An error occurred." });
  }
};

const getPaginated = async (req, res) => {
  try {
    const { page, size } = req.query;
    const limit = parseInt(size);
    const skip = (parseInt(page) - 1) * limit;
    const result = await MovieSchema.find().skip(skip).limit(limit);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ error: "An error occurred." });
  }
};

module.exports = { addMovies, findMovies, findSingleMovie, getPaginated };
