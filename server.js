require("dotenv").config();
require('./config/db.connection.js');

const express = require('express');
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const { PORT } = process.env;

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const movieRouter = require('./routes/movies-router.js');
app.use('/movies', movieRouter);

// Root route
app.get('/', function (req, res) {
  res.send('<h1>Movies</h1>');
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));