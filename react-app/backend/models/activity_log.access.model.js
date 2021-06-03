const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accessSchema = new Schema({
    _id = {type: String},
    userid = {type: String},
    activitytype: {type: String},
    resourceid: {type: String}   
},{timestamps: true}

);

//changed Management to Access, and managementSchema to accessSchema
const Access = mongoose.model('Access', accessSchema);

module.exports = Access;


