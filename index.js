const express = require("express");
const app = express();
require("./db/db");
const movieRoute = require("./routes/MoviesRoute");

app.use(express.json());

app.use("/movie", movieRoute);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
