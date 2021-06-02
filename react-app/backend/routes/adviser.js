
const router =  require('express').Router();        //require express package, create a new instance of router object
let Adviser =  require('../models/adviser.model');  //reference to adviser schema

router.route('/').get((req, res)=>{                         //get request
    Adviser.find()
        .then((adviser) => {
            res.json(adviser)
            console.log(adviser)
        })
        .catch(err => res.status(400).json('Error: '+err)); //print error

});

router.route('/add-adviser').post((req, res) => {           //post request
    const _id =  req.body._id;
    const advname = req.body.advname;
    const resourceid = req.body.resourceid;


    const newAdviser = new Adviser({                        //crete new adviser
        _id, advname, resourceid});

    newAdviser.save()                                       //add new adviser
        .then(adviser => res.json('New Adviser Added!'))
        .catch(err => res.status(400).json('Error: '+err)); 
});

module.exports = router; //export router