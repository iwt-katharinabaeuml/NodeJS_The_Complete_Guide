const { MongoClient } = require('mongodb');

const mongoConnect = async (callback) => {
  try {
    const client = await MongoClient.connect('mongodb+srv://testUser:TestPassword@cluster0.i4es5p4.mongodb.net/');
    console.log('Connected!');
    callback(client);
  } catch (err) {
    console.error(err);
  }
};

module.exports = mongoConnect;