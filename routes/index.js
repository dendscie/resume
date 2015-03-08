var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    var resumeData = JSON.parse(fs.readFileSync("./data/en/resume.json"));
    res.render('index',  {"resume" : resumeData});
});

module.exports = router;
