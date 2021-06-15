const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    _id = {type: mongoose.Types.ObjectId},
    subject: {type: String},
    resourceid: {type: [String]}
    
});

const Subject = mongoose.model('Subject', subjectSchema, 'resource_subjects');

module.exports = Subject;