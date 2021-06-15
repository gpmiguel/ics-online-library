const router =  require('express').Router();
const mongoose = require('mongoose');
let AcademicPaper =  require('../models/resource_acad_paper.model');

router.route('/acad-paper').get((req, res)=>{
    AcademicPaper.find()
        .then((resource_acad_paper) => {
            res.json(resource_acad_paper)
            console.log(resource_acad_paper)
        })
        .catch(err => res.status(400).json('Error: '+err)); 
});

router.route('/add-academic-paper').post((req, res) => {
    const _id =  req.body._id;
    const title = req.body.title;
    const author = req.body.author;
    const subject = req.body.subject;
    const year = req.body.year;
    const pagecount = req.body.pagecount;
    const resourcetype = req.body.resourcetype;
    const degreetype = req.body.degreetype;
    const institution = req.body.institution;
    const adviser = req.body.adviser;
    const keyword = req.body.keyword;
    const manuscript = req.body.manuscript;
    const abstract = req.body.abstract;
    const journal = req.body.journal;
    const poster = req.body.poster;
    const sourcecode = req.body.sourcecode;
    const displayimage = req.body.displayimage;

    const newAcademicPaper = new AcademicPaper({
        _id, title, author, subject, year, pagecount, resourcetype, degreetype,
        institution, adviser, keyword, manuscript, abstract, journal,
        poster, sourcecode, displayimage});

    newAcademicPaper.save()
        .then(resource_acad_paper => res.json('New Academic Paper Added!'))
        .catch(err => res.status(400).json('Error: '+err)); 
});


//----------------------
let User =  require('../models/user.model');

router.route('/user_regs').get((req, res)=>{
    User.find()
    .then((user_array) => {
        res.json(user_array)
        console.log(user_array)
    })
    .catch(err => res.status(400).json('Error: '+err));
})

router.route('/add-user').post((req, res) => {
    const _id =  req.body._id;
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const email = req.body.email;
    const usertype = req.body.usertype;
    const activityid = req.body.activityid;

    const newUser = new User({
        _id, lastname, firstname, email, usertype, activityid});

    newUser.save()
        .then(user_array => res.json('New User Added!'))
        .catch(err => res.status(400).json('Error: '+err)); 
});
//----------------------
let  Book = require("../models/resource_book.model");

 router.route('/book').get((req, res)=>{
     Book.find()
        .then((book_array) => {
            res.json(book_array)
            console.log(book_array)
        })
        .catch(err => res.status(400).json('Error: '+err));
    
})

router.route('/add-book').post((req, res) => {


    const _id =  String(mongoose.Types.ObjectId());
    // const _id =  req.body._id;
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