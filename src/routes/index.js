import Express from 'express';
import path from 'path';
const router = new Express.Router();
import fs from 'fs';

/* GET home page. */
router.get('/', function (req, res, next) {
    let resumeData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/en/resume.json')));
    res.render('index',  {"resume" : resumeData});
});

module.exports = router;
