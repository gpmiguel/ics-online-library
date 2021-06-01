const express = require("express");
const router = express.Router();
const Guest = require("../models/guest.model");

router.route('/').get((req, res)=>{
    Book.find()
        .then((guest_array) => {
            res.json(guest_array)
            console.log(guest_array)
        })
})

router.route('/add-guest').post((req, res) => {
    const _id =  req.body._id;
    const activityid = req.body.activityid;

    const newGuest = new Guest({
        _id, activityid});

    newGuest.save()
        .then(guest_array => res.json('New Guest Added!'))
        .catch(err => res.status(400).json('Error: '+err)); 
});

module.exports = router;