const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies-controller');

router.get('/', (req, res) => {
  res.send('Movie List');
});

module.exports = router;