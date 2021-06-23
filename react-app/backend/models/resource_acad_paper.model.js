const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const academicPaperSchema = new Schema({
    _id: {type: String},
    title: {type: String},
    author: {type: [String]},
    subject: {type: [String]},
    year: {type: Number},
    pagecount: {type: Number},
    resourcetype: {type: String},
    degreetype: {type: String},
    institution: {type: String},
    adviser: {type: [String]},
    keyword: {type: [String]},
    manuscript: {type: String},
    abstract: {type: String},
    journal: {type: String},
    sourcecode: {type: String},
    poster: {type: String},
    displayimage: {type: String},
}, {
    timestamps: true
});

const AcademicPaper = mongoose.model('resource_acad_paper', academicPaperSchema, 'resource_acad_papers');

module.exports = AcademicPaper;
