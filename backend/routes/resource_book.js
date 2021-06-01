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

module.exports = router;