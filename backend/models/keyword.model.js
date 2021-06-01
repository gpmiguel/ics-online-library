const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registrySchema = new Schema({
    _id = {type: String},
    userid = {type: String},
    activitytype: {type: String},
    action: {type: String},
},{timestamps: true}

);

const Registry = mongoose.model('Registry', registrySchema);

module.exports = Registry;