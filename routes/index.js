var express = require('express');
var router = express.Router('express');

//LOAD the various controllers
var controllerDatabase = require('../controllers/database'); //load controller code dealing with database mongodb and Routes collection

var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://scottieprom123:lolabc123@ds151008.mlab.com:51008/heroku_wcw1rlmf';

router.get('/', function(req,res,next){res.render('index', {title:'Express'});});

//**************************************************************************
//***** mongodb get all of the Routes in Routes collection where frequence>=1
//      and sort by the name of the route.  Render information in the views/pages/mongodb.ejs

router.post('/storeData', controllerDatabase.storeData);
router.get('/getAllOrders', controllerDatabase.getAllOrders);

/*router.post('/getAllOrders', function (request, response) {

    mongodb.MongoClient.connect(mongoDBURI, function(err,  client) {
        if(err) throw err;
        //get handle to the database
        var theDatabase = client.db('heroku_hnqdq9m4');

        router.get('/getAllOrders', function(req, res, next)
        {

            res.render('index', { title: 'Express' });
        });


        //get collection of Routes
        var Routes = theDatabase.collection('Routes');
        //get all Routes
        Routes.find({ }).sort({ name: 1 }).toArray(function (err, docs) {
            if(err) throw err;

            response.render('mongodb', {results: docs});

        });

        //close connection when your app is terminating.
        client.close(function (err) {
            if(err) throw err;
        });
    });//end of connect

});//end XXX.get*/

module.exports = router;
