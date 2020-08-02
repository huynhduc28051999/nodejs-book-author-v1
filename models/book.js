const mogoose = require('mongoose');
const Schema = mogoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = mogoose.model('Book',bookSchema)