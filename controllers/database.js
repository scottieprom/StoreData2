var mongodb = require('mongodb');
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://scottieprom123:lolabc123@ds151008.mlab.com:51008/heroku_wcw1rlmf';


/** getAllRoutes controller logic that current does model logic too -connects to Mongo database and
 * queries the Routes collection to retrieve all the routes and build the output usig the
 * ejs template mongodb.ejs found in views directory
 * @param request
 * @param response
 *
 */
module.exports.getAllOrders =  function (request, response) {

    mongodb.MongoClient.connect(mongoDBURI, function(err,  client) {
        if(err) throw err;


        //get handle to the databse
        var theDatabase = client.db('heroku_wcw1rlmf');


        //get collection of routes
        var Routes = theDatabase.collection('Order');


        //SECOND -show another way to make request for ALL Routes  and simply collect the  documents as an
        //   array called docs that you  forward to the  getAllRoutes.ejs view for use there
        Routes.find().toArray(function (err, docs) {
            if(err) throw err;

            response.render('getAllOrders', {results: docs});

        });

        //close connection when your app is terminating.
        client.close(function (err) {
            if(err) throw err;
        });
    });//end of connect
};//end function
