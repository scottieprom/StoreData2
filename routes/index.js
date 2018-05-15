var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var path = require ('path');
var querystring = require('querystring');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }));

//now processing post
router.post('/storeData', function(req, res, next) {
//expecting data variable called order--retrieve value using body-parser
    var body = JSON.stringify(req.body);  //if wanted entire body as JSON
    var params = JSON.stringify(req.params);//if wanted parameters
    var value_name = req.body.order  //retrieve the data associated with order
    res.send("order succesfully received: " + value_name);
});

module.exports = router;






