const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL,{useNewUrlParser: true});
console.log('DATABASE URL', process.env.DB_URL);

mongoose.connection.once('open', () => console.log('Connected to a MongoDB instance'));
mongoose.connection.on('error', error => console.error(error));

 module.exports = mongoose