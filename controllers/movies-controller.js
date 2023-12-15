const express = require('express')
const Movie = require('../models/movie-model');

async function index(req, res, next){
    try {
        res.status(200)
        .json(await Movie.find({}));
    }catch (error) {
        res.status(400).json(error);
    }
}

async function show(req, res, next){
    try {
        res.status(200)
        .json(await Movie.findById(req.params.id));
    }catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
  index,
  show,
};
