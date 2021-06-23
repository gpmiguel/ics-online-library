const router =  require('express').Router();
const mongoose = require('mongoose');
const crypto = require('crypto');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const { rejects } = require('assert');
const path = require('path');
const { resolve } = require('path');
var ObjectId = require('mongodb').ObjectID;


const bodyParser = require("body-parser");
const jsonParse = bodyParser.json();
const urlencodedParse = bodyParser.urlencoded({ extended: false })
const mongoURI = "mongodb+srv://c4ladmin:icsadmin@icslibrarysystem.5tt8e.mongodb.net/icslibrarysystem";

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
        if (err) {
            return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
        };
        resolve(fileInfo);
        });
    });
    }
});

const upload = multer({storage});

//MODELS
let AcademicPaper =  require('../models/resource_acad_paper.model');
let Book = require("../models/resource_book.model");
let User =  require('../models/user.model');
let Guest = require("../models/guest.model");
let Adviser =  require('../models/adviser.model');
let Registry =  require('../models/activity_log.registry.model');
let Management =  require('../models/activity_log.manage.model');
let Access =  require('../models/activity_log.access.model');
let Author = require ('../models/author.model')
let Keyword = require ('../models/keyword.model')
let Subject = require ('../models/subject.model')



//UPLOADS
router.post('/manus', upload.single('manus'), (req, res) => {
    if (req.file) {
        
        return res.json({
            success: true,
            file: req.file
        });
    }
    res.send({ success: false, file:req.file });
  });

  router.post('/poster', upload.single('poster'), (req, res) => {
    if (req.file) {
        
        return res.json({
            success: true,
            file: req.file
        });
    }
    res.send({ success: false, file:req.file });
  });

  router.post('/display', upload.single('display'), (req, res) => {
    if (req.file) {
        
        return res.json({
            success: true,
            file: req.file
        });
    }
    res.send({ success: false, file:req.file });
  });


  router.post('/maincopy', upload.single('maincopy'), (req, res) => {
    if (req.file) {
        
        return res.json({
            success: true,
            file: req.file
        });
    }
    res.send({ success: false, file:req.file });
  });

//ACADEMIC PAPER
router.route('/acad-papers').get((req, res)=>{
    AcademicPaper.find()
        .then((resource_acad_paper) => {
            res.json(resource_acad_paper)
            console.log(resource_acad_paper)
        })
        .catch(err => res.status(400).json('Error: '+err)); 
});
router.route('/add-academic-paper').post((req, res) => {
    const _id =  String(new mongoose.Types.ObjectId());
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
        .then((resource_acad_paper) => {
            res.json({
            message: 'New Academic Paper Added!',
            data: resource_acad_paper });
            
            console.log(resource_acad_paper)


            })
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/edit-acad-paper/:id').put(jsonParse, (req, res) => {
    AcademicPaper.findOneAndUpdate({_id: req.params.id},{
    title: req.body.title,
    author: req.body.author,
    subject: req.body.subject,
    year: req.body.year,
    pagecount: req.body.pagecount,
    resourcetype: req.body.resourcetype,
    degreetype: req.body.degreetype,
    institution: req.body.institution,
    adviser: req.body.adviser,
    keyword: req.body.keyword,
    manuscript: req.body.manuscript,
    abstract: req.body.abstract,
    journal: req.body.journal,
    poster: req.body.poster,
    sourcecode: req.body.sourcecode,
    displayimage: req.body.displayimage,
    }) .then(resource_acad_paper => {res.json('Academic Paper Updated!')})
    .catch(err => res.status(400).json('Error: '+err)); 
})

router.route('/delete-acad-paper/:id').get((req, res)=>{
    AcademicPaper.deleteOne({_id: req.params.id})
        .then((resource_acad_paper) => {
            res.json('Academic Paper Deleted!')
        })
        .catch(err => res.status(400).json('Error: '+err)); 
});

//BOOK
 router.route('/books').get((req, res)=>{
     Book.find()
        .then((book_array) => {
            res.json(book_array)
            console.log(book_array)
        })
        .catch(err => res.status(400).json('Error: '+err));
    
})

router.route('/add-book').post((req, res) => {

    const _id =  String(mongoose.Types.ObjectId());
    const title = req.body.title;
    const author = req.body.author;
    const subject = req.body.subject;
    const year = req.body.year;
    const pagecount = req.body.pagecount;
    const resourcetype = "Book";
    const isbn = req.body.isbn;
    const publisher = req.body.publisher;
    const edition = req.body.edition;
    const maincopy = req.body.maincopy;
    const keyword = req.body.keyword;
    const introduction = req.body.introduction;
    const displayimage = req.body.displayimage;

    const newBook = new Book({
        _id, title, author, subject, year, pagecount, resourcetype, isbn,
        publisher, edition, maincopy, introduction, displayimage, keyword});

    newBook.save()
        .then(book_array => res.json('New Book Added!'))
        .catch(err => res.status(400).json('Error: '+err)); 
});

router.route('/edit-book/:id').put((req, res) => {
    Book.findOneAndUpdate({_id: req.params.id}, {
        title : req.body.title,
        author : req.body.author,
        subject : req.body.subject,
        year : req.body.year,
        pagecount : req.body.pagecount,
        resourcetype : "Book",
        isbn : req.body.isbn,
        publisher : req.body.publisher,
        edition : req.body.edition,
        maincopy : req.body.maincopy,
        introduction : req.body.introduction,
        displayimage : req.body.displayimage,
    }) .then(resource_book => res.json('Book Updated!'))
    .catch(err => res.status(400).json('Error: '+err)); 
})

router.route('/delete-book/:id').get((req, res)=>{
    Book.deleteOne({_id: req.params.id})
       .then((book_array) => {
        res.json('Book Deleted!')
       })
       .catch(err => res.status(400).json('Error: '+err));
   
})

//USERS
router.route('/users').get((req, res)=>{
    User.find()
    .then((user_array) => {
        res.json(user_array)
        console.log(user_array)
    })
    .catch(err => res.status(400).json('Error: '+err));
})

router.route('/add-user').post((req, res) => {
    const _id =  String(mongoose.Types.ObjectId());
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

router.route('/edit-user/:id').put(jsonParse, (req, res) => {

    console.log(req.body);

    const data_id = req.body._id;

    const data = {
        lastname : req.body.lastname,
        firstname : req.body.firstname,
        email : req.body.email,
        usertype : req.body.usertype,
        };

    // console.log(change_id, data, data_id);

    User.findOneAndUpdate({_id: req.params.id}, {$set: data}) .then(user => res.json({
        message: 'User Updated!',
        data : data,
        find: req.params.id
    }))
    .catch(err => res.status(400).json('Error: '+err)); 
})

router.route('/delete-user/:id').get((req, res)=>{
    User.deleteOne({_id: req.params.id})
    .then((user)=> {
        res.json(user);
        console.log(user);
    })
    .catch(err => res.status(400).json('Error: '+err));
})


//TODO: change email to ID
router.route('/auth/:email').get((req, res)=>{
    User.findOne({email: req.params.email})
    .then((user)=> {
        res.json(user);
        console.log(user);
    })
    .catch(err => res.status(400).json('Error: '+err));
})


//GUESTS
router.route('/guests').get((req, res)=>{
    Guest.find()
        .then((guest_array) => {
            res.json(guest_array)
            console.log(guest_array)
        })
});

router.route('/add-guest').post((req, res) => {
    const _id =  String(mongoose.Types.ObjectId());
    const activityid = req.body.activityid;

    const newGuest = new Guest({
        _id, activityid});

    newGuest.save()
        .then(guest_array => res.json({
            // message: 'New Guest Added!',
            guest_id: _id,
            activityid: activityid
    }))
        .catch(err => res.status(400).json('Error: '+err)); 
});

router.route('/edit-guest/:id').put(jsonParse, (req, res) => {
    Guest.findOneAndUpdate({_id: req.params.id}, {activityid: req.body.activityid}).then(guest => {
        res.json("Guest updated");
    }).catch(err => res.status(400).json('Error: '+err)); 

})

//ADVISERS
router.route('/advisers').get((req, res)=>{                         
    Adviser.find()
        .then((adviser) => {
            res.json(adviser)
            console.log(adviser)
        })
        .catch(err => res.status(400).json('Error: '+err)); 

});

router.route('/adviser/:adviser').get((req, res)=>{
    Adviser.findOne({adviser: req.params.adviser}).exec()
})

router.route('/add-adviser').post((req, res) => {           
    const _id =  String(mongoose.Types.ObjectId());
    const adviser = req.body.adviser;


    const newAdviser = new Adviser({                       
        _id, adviser});
    


    newAdviser.save()                                       
        .then(adviser => res.json('New Adviser Added!'))
        .catch(err => res.status(400).json('Error: '+err)); 
});

//ACTIVITY LOGS
router.route('/registry').get((req, res)=>{                     
    Registry.find()
        .then((activity_log_registry) => {
            res.json(activity_log_registry)
            console.log(activity_log_registry)
        })
        .catch(err => res.status(400).json('Error: '+err)); 
});

router.route('/add-activity-log').post((req, res) => {  
    const _id =  String(mongoose.Types.ObjectId());
    const userid = req.body.userid;
    const activitytype = req.body.activitytype;
    const action = req.body.action;


    const newActivityManage = new Registry({            
        _id, userid, activitytype, action});

    newActivityManage.save()                            
        .then(activity_log_registry => res.json({
            message:'New Activity Log Added!',
            log_id: _id
        }))
        .catch(err => res.status(400).json('Error: '+err)); 
});

//AUTHORS
router.route('/author/:author_id').get((req, res)=>{
    Author.findById(req.params.author_id)
    .then((author)=> {
        res.json(author);
        console.log(req.params.author_id);
    })
    .catch(err => res.status(400).json('Error: '+err));
})

router.route('/author/:author').get((req, res)=>{
    Author.findOne({author: req.params.author}).exec()
})

router.route('/add-author').post((req, res)=>{
    const _id =  String(mongoose.Types.ObjectId());
    const author = req.body.author.toUpperCase();

    const newAuthor = new Author({
        _id, author
    })

    newAuthor.save().then(author_data => {
        res.json({
            message:'New Author Added!',
            author: author
        })
    }).catch(err => res.status(400).json('Error: '+err));
    
})

//SUBJECTS
router.route('/subject/:subject_id').get((req, res)=>{
    Subject.findById(req.params.subject_id)
    .then((subject)=> {
        res.json(subject);
        console.log(subject);
    })
    .catch(err => res.status(400).json('Error: '+err));
})

router.route('/subject/:subject').get((req, res)=>{
    Subject.findOne({subject: req.params.subject}).exec()
})

router.route('/add-subject').post((req, res)=>{
    const _id =  String(mongoose.Types.ObjectId());
    const subject = req.body.subject.toUpperCase();

    const newSubject = new Subject({
        _id, subject
    })

    newSubject.save().then(subject_data => {
        res.json({
            message:'New Author Added!',
            subject: subject
        })
    }).catch(err => res.status(400).json('Error: '+err));
    
})

//KEYWORDS
router.route('/keyword/:keyword_id').get((req, res)=>{
    Keyword.findById(req.params.keyword_id)
    .then((keyword)=> {
        res.json(keyword);
        console.log(keyword);
    })
    .catch(err => res.status(400).json('Error: '+err));
})

router.route('/keyword/:keyword').get((req, res)=>{
    Keyword.findOne({keyword: req.params.keyword}).exec()
})

router.route('/add-keyword').post((req, res)=>{
    const _id =  String(mongoose.Types.ObjectId());
    const keyword = req.body.keyword.toUpperCase();

    const newKeyword = new Keyword({
        _id, keyword
    })

    newKeyword.save().then(keyword_data => {
        res.json({
            message:'New Keyword Added!',
            keyword: keyword
        })
    }).catch(err => res.status(400).json('Error: '+err));
    
})












module.exports = router;