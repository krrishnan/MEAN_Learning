var express = require('express');
var router = express.Router();
var ctrlMain = require("D:\\GopiKrishnan\\Projects\\MEAN\\loc8r\\app_server\\controllers\\main.js");

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
