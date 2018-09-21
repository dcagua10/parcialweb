const Review = require('../../models/Review');
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
    rating
  } = body;
  console.log(body);

  const newReview = new Review();
  newReview.first_name = first_name;
  newReview.last_name = last_name;
  newReview.description = descripcion;
  newReview.rating = rating;

  console.log(Review);

  MongoClient.connect(url, function (err,db) 
  {
    if(err) throw err;
    const dbo = db.db(dbName);
    dbo.collection('reviews').insertOne(newReview, function(err,res){
      if (err) throw err;
      console.log('Review Add');
      db.close();
    });
  });
});


module.exports = router;