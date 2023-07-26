const router = require("express").Router();
const {
  addMovies,
  findMovies,
  findSingleMovie,
  getPaginated,
} = require("../controller/movieController");

//to save a movie into database
router.post("/add-movie", addMovies);

//to fetch all the movies stores in the database
router.get("/get-all", findMovies);

//to fetch only single movie
router.get("/get-single", findSingleMovie);

//to fetch movies using pagination
router.get("/get-paginated", getPaginated);

module.exports = router;
