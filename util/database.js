

const { MongoClient } = require('mongodb');

// Verbindungs-URL zur lokalen MongoDB
const url = 'mongodb://localhost:27017';

// Name der Datenbank
const dbName = 'first_trys';

// Erstelle einen MongoDB-Client
const client = new MongoClient(url);

// Collection-Name 
const collectionName = 'NodeJS_udemy'



let _db;

const mongoConnect = callback => {
  client.connect()
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      console.log("THIS IS THE CLIENT" + client)
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
