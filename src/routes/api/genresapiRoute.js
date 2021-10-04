var express = require('express');
const { route } = require('..');
var router = express.Router();
const genresController = require("../../controllers/api/genresApiController")

/* Genres Endpoint => /genreApi */

router.get('/list', genresController.list);
router.get("/detail/:id", genresController.detail)
module.exports = router;
