var express = require('express');
var router = express.Router();
require('dotenv').config();

//Codigo documentacion mongo
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL (localhost / MongoDB)
//const url = 'mongodb://localhost:27017';
const url = process.env.MONGODB_URI;

// Database Name MODIFICAR (nombre / env MongoDB)
//const dbName = "parcialDB"
const dbName = process.env.DB_NAME;

// Collection Name MODIFICAR
const collectionName = 'reviews';

//Tomar los datos
function getData(callback){
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    //cuidado!! la conexion podria cerrarse antes de terminar el llamado a la base de datos
    const db = client.db(dbName);
    //mini callback hell
    findDocuments(db, (data)=>{
      callback(data);
      client.close();
    });

  });
}

// Insercion de documentos
const insertDocuments = function(db,data, callback) {
  // Get the documents collection
  let collectionName = 'reviews';
  const collection = db.collection(collectionName);
  // Insert some documents
  collection.insertOne(data, function(err, result) {
    console.log("Inserted document");
    console.log(result);
    callback(result);
  });
}
// Fin del codigo copiado 

//Funcion para encontrar todos los documentos de la DB
const findDocuments = function(db, callback) {
  // Collection Name MODIFICAR
  let collectionName = 'reviews';
  // Get the documents collection
  const collection = db.collection(collectionName);
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
};
//END 


/* Home Page */
router.get('/', function(req, res, next) {
  //Ya no voy a renderizar el template del index
  // res.render('index', { title: 'Express' });
});

/* Lista de Endpoints a nivel de Backend */
//getData ejemplo
router.get('/getData', function(req, res) {
  //Header que indica el envio de un archivo json
  res.setHeader('Content-Type', 'application/json');
  getData((data)=>
    res.send(data)
  );
});

//postData ejemplo
router.post('/nada', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  insertDocuments((data)=>
  res.send(data)
  );
});

router.post('/posData', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const { body } = req;
  const {
    //id,
    nombre,
    apellido
  } = body;
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    
    const db = client.db(dbName);
    insertDocuments(db,body,(data)=>
    res.send(data)
    );
  });
});

module.exports = router;

