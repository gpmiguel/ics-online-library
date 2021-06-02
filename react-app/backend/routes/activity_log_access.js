
const router =  require('express').Router();  //require express package, create a new instance of router object
let Access =  require('../models/activity_log.access.model'); //reference to activity log schema

router.route('/').get((req, res)=>{                         //get request
    Access.find()
        .then((activity_log_access) => {
            res.json(activity_log_access)
            console.log(activity_log_access)
        })
        .catch(err => res.status(400).json('Error: '+err));  //print error
});

router.route('/add-activity-log').post((req, res) => {
    const _id =  req.body._id;
    //timestamp
    const userid = req.body.userid;
    const activitytype = req.body.activitytype;
    const resourceid = req.body.resourceid;


    const newActivityAccess = new Access({                  //create new Access log
        _id, userid, activitytype, resourceid});

    newActivityAccess.save()                                //add new activity log access
        .then(activity_log_access => res.json('New Activity Log Added!'))
        .catch(err => res.status(400).json('Error: '+err)); 
});

module.exports = router; //export router