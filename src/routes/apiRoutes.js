var express = require('express');
var router = express.Router();
const { list, show, store } = require("../controllers/apiController");

/* GET home page. */
router.get('/', list);
router.post('/', store);
router.get('/:id', show);

module.exports = router;