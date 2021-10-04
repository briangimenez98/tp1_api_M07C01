var express = require('express');
var router = express.Router();
const moviesController = require("../../controllers/api/moviesController")

/* Movies Endpoint => /movieApi */

router.post("/create", moviesController.create)
router.delete("/delete/:id", moviesController.delete)
    
module.exports = router;