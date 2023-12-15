const router = require("express").Router();
const apiCtrl = require("../controllers/movies-api.js");

router.get('/', apiCtrl.index);

module.exports = router;