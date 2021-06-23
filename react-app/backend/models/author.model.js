const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    _id : {type: String},
    author: {type: String},
    
});

const Author = mongoose.model('Author', authorSchema, 'resource_authors');

module.exports = Author;