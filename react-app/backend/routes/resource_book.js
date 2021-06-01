const express = require("express");
const router = express.Router();
const Book = require("../models/resource_book.model");

router.route('/').get((req, res)=>{
    Book.find()
        .then((book_array) => {
            res.json(book_array)
            console.log(book_array)
        })
})

router.route('/add-book').post((req, res) => {
    const _id =  req.body._id;
    const title = req.body.title;
    const author = req.body.author;
    const subject = req.body.subject;
    const year = req.body.year;
    const pagecount = req.body.pagecount;
    const resourcetype = req.body.resourcetype;
    const isbn10 = req.body.isbn10;
    const isbn13 = req.body.isbn13;
    const publisher = req.body.publisher;
    const edition = req.body.edition;
    const maincopy = req.body.maincopy;
    const introduction = req.body.introduction;
    const displayimage = req.body.displayimage;

    const newBook = new Book({
        _id, title, author, subject, year, pagecount, resourcetype, isbn10, isbn13,
        publisher, edition, maincopy, introduction, displayimage});

    newBook.save()
        .then(book_array => res.json('New Book Added!'))
        .catch(err => res.status(400).json('Error: '+err)); 
});

module.exports = router;