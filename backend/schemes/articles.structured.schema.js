const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String
},
{
  collection: 'articles'
});

module.exports = mongoose.model('Data', DataSchema);
