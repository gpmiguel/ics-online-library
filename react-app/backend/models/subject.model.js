const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    _id : {type:String},
    subject: {type: String},
    // resourceid: {type: [String]}
    
});

const Subject = mongoose.model('Subject', subjectSchema, 'resource_subjects');

module.exports = Subject;