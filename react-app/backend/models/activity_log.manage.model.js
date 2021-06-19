const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const managementSchema = new Schema({
    _id : {type: String},
    userid : {type: String},
    activitytype: {type: String},
    action: {type: String},
    entityid: {type: String}   
},{timestamps: true}

);

//no collection
const Management = mongoose.model('Management', managementSchema);

module.exports = Management;