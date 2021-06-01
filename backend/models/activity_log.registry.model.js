const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const management = new Schema({
    _id = {type: String},
    userid = {type: String},
    activitytype: {type: String},
    action: {type: String},
    entityid: {type: String}   
},{timestamps: true}

);

const Management = mongoose.model('Management', management);

module.exports = Management;