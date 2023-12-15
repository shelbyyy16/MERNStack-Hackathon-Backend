const express = require('express');
const axios = require('axios');

async function index(req, res, next) {
  try {
    const catsFilter = req.query.cats;
    const recommendations = await getMovies(catsFilter);
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getMovies() {
  const omdbApiKey = '6d50e8a9';
  const omdbApiUrl = `http://www.omdbapi.com/?s=cats&apikey=${omdbApiKey}`;

  try {
    const response = await axios.get(omdbApiUrl);
    return response.data.Search || [];
  } catch (error) {
    throw new Error(`Failed to fetch movie recommendations: ${error.message}`);
  }
}

module.exports = {
  index,
};