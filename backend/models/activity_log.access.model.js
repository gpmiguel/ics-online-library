const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const managementSchema = new Schema({
    _id = {type: String},
    userid = {type: String},
    activitytype: {type: String},
    resourceid: {type: String}   
},{timestamps: true}

);

const Management = mongoose.model('Management', managementSchema);

module.exports = Management;