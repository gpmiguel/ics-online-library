
const router =  require('express').Router();       //require express package, create a new instance of router object
let Subject =  require('../models/subject.model'); //reference to subject schema

router.route('/').get((req, res)=>{                         //get request
    Subject.find()
        .then((subj) => {
            res.json(subj)
            console.log(subj)
        })
        .catch(err => res.status(400).json('Error: '+err)); //print error
});

router.route('/add-subject').post((req, res) => {           //post request
    const _id =  req.body._id;
    const subject = req.body.subject;
    const resourceid = req.body.resourceid;


    const newAdviser = new Subject({                        //create new subject
        _id, subject, resourceid});

    newAdviser.save()                                       //update subject
        .then(subj => res.json('New Subject Added!'))
        .catch(err => res.status(400).json('Error: '+err)); 
});

module.exports = router; //export router