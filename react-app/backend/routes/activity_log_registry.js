
const router =  require('express').Router();  //require express package, create a new instance of router object
let Registry =  require('../models/activity_log.registry.model');   //reference to registry model

router.route('/').get((req, res)=>{                     //get request
    Registry.find()
        .then((activity_log_registry) => {
            res.json(activity_log_registry)
            console.log(activity_log_registry)
        })
        .catch(err => res.status(400).json('Error: '+err)); 
});

router.route('/add-activity-log').post((req, res) => {  //post request
    const _id =  req.body._id;
    //timestamp
    const userid = req.body.userid;
    const activitytype = req.body.activitytype;
    const action = req.body.action;


    const newActivityManage = new Registry({            //create new registry log
        _id, userid, activitytype, action});

    newActivityManage.save()                            //update management activity
        .then(activity_log_registry => res.json('New Activity Log Added!'))
        .catch(err => res.status(400).json('Error: '+err)); 
});

module.exports = router; //export router