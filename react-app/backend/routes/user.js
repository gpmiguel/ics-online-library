const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.route('/').get((req, res)=>{
    Book.find()
        .then((user_array) => {
            res.json(user_array)
            console.log(user_array)
        })
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

module.exports = router;