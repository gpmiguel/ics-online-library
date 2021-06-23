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
    keyword: {type: [String]} ,
    publisher: {type: String},
    edition: {type: String},
    maincopy: {type: String},
    introduction: {type: String},
    displayimage: {type: String}
},{
    timestamps: true
});

const Book = mongoose.model('Book', bookSchema,'resource_books');

module.exports = Book;