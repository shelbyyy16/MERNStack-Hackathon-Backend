const express = require('express');
const axios = require('axios');

async function index(req, res, next) {
  try {
    const ratingsFilter = req.query.ratings;
    const recommendations = await getMovies(ratingsFilter);
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function show(req, res, next) {
  try {
    const movieId = req.params.id;
    const movieDetails = await getMovieDetails(movieId);
    res.status(200).json(movieDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getMovieDetails(movieId) {
  const omdbApiKey = '6d50e8a9';
  const omdbApiUrl = `http://www.omdbapi.com/?i=${movieId}&apikey=${omdbApiKey}`;

  try {
    const response = await axios.get(omdbApiUrl);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch movie details: ${error.message}`);
  }
}


async function getMovies(ratingsFilter) {

  const omdbApiKey = '6d50e8a9';
  const omdbApiUrl = `http://www.omdbapi.com/?s=ratings&apikey=${omdbApiKey}`;

  try {
    const response = await axios.get(omdbApiUrl);
    return response.data.Search || []; 
  } catch (error) {
    throw new Error(`Failed to fetch movie recommendations: ${error.message}`);
  }
}

module.exports = {
  index,
  show,
  getMovieDetails,
};