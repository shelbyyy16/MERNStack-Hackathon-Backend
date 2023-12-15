const router = require("express").Router();
const apiCtrl = require("../controllers/movies-api.js");

router.get("/", apiCtrl.index);
router.get("/:id", apiCtrl.show);

module.exports = router;