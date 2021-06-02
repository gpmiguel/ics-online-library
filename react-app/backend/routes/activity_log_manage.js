
const router =  require('express').Router();  //require express package, create a new instance of router object
let Management =  require('../models/activity_log.manage.model');  //reference to manage log schema

router.route('/').get((req, res)=>{                     //get request
    Management.find()
        .then((activity_log_manage) => {
            res.json(activity_log_manage)
            console.log(activity_log_manage)
        })
        .catch(err => res.status(400).json('Error: '+err)); 
});

router.route('/add-activity-log').post((req, res) => {  //post request
    const _id =  req.body._id;
    //timestamp
    const userid = req.body.userid;
    const activitytype = req.body.activitytype;
    const action = req.body.action;
    const entityid = req.body.entityid;


    const newActivityManage = new Management({          //create new management
        _id, userid, activitytype, action, entityid});

    newActivityManage.save()                            //update management log
        .then(activity_log_manage => res.json('New Activity Log Added!'))
        .catch(err => res.status(400).json('Error: '+err)); 
});

module.exports = router; //export router