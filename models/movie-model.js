const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  releaseDate: { type: Date },
  genre: {type: String},
  actor: {type: String},
  director: {type: String}

});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;