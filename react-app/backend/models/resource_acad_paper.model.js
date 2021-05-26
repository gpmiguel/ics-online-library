const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const academicPaperSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: [String],
        required: true,
    },
    subject: {
        type: [String],
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    pagecount: {
        type: Number,
        required: true,
    },
    resourcetype: {
        type: String,
        required: true,
    },
    degreetype: {
        type: String,
        required: true,
    },
    institution: {
        type: String,
        required: true,
    },
    adviser: {
        type: [String],
        required: true,
    },
    keyword: {
        type: [String],
        required: true,
    },
    manuscript: {
        type: Object,
        required: true,
    },
    abstract: {
        type: String,
        required: true,
    },
    journal: {
        type: Object,
        required: true,
    },
    poster: {
        type: Object,
        required: true,
    },
    sourcecode: {
        type: Object,
        required: true,
    },
    displayimage: {
        type: Object,
        required: true,
    },
    
}, {
    timestamps: true
});

const AcademicPaper = mongoose.model('resource_acad_paper', academicPaperSchema);

module.exports = AcademicPaper;