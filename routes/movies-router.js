const express = require('express');
const router = express.Router();

const moviesCtrl = require('../controllers/movies-controller');

router.get("/", moviesCtrl.index);

router.get("/:id", peopleCtrl.show);

module.exports = router;