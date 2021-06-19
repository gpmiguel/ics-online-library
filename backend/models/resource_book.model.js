const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    _id: {type: String},
    title: {type: String},
    author:{type: [String]},
    subject:{type: [String]},
    year: {type: Number},
    pagecount: {type: Number},
    resourcetype: {type: String},
    isbn: {
        isbn10: {type: String},
        isbn13: {type: String},
    },
    publisher: {type: String},
    edition: {type: String},
    maincopy: {type: Object},
    introduction: {type: String},
    displayimage: {type: Object}
},{
    timestamps: true
});

const Book = mongoose.model('Book', bookSchema,'resource_books');

module.exports = Book;