const mongoose = require('mongoose');

mongoose.connect(`mongosh "mongodb+srv://hospital-api.w5qrrwc.mongodb.net/" --apiVersion 1 --username tharunkumart53`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
