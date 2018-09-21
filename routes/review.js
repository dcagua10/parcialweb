var router = require('express').Router();
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

router.post('/api/review', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const { body } = req;
  const {
    first_name,
    last_name,
    description,
    rating,
    dataG1,
    dataG2
  } = body;
  console.log(body);

  var review={first_name:first_name,last_name:last_name,description:description,rating:rating, dataG1:null, dataG2:null};

  MongoClient.connect(url, function (err,db) 
  {
    if(err) throw err;
    const dbo = db.db(dbName);
    dbo.collection('reviews').insertOne(review, function(err,res){
      if (err) throw err;
      console.log('Review Add');
      db.close();
    });
  });
});


module.exports = router;