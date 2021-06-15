const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    _id = {type: mongoose.Types.ObjectId},
    author: {type: String},
    resourceid: {type: [String]}
    
});

const Author = mongoose.model('Author', authorSchema, 'resource_author');

module.exports = Author;