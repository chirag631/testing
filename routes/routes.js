var express = require('express');
var router = express.Router();
const controllers=require('./controller/controllers');

/* GET home page. */
router.get('/say-something',controllers.saySomething);

module.exports = router;