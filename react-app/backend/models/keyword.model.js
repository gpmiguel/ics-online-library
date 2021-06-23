const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const keywordSchema = new Schema({
    _id : {type: String},
    keyword : {type: String},
},{timestamps: true}

);

const Keyword = mongoose.model('Keyword', keywordSchema, 'acad_paper_keywords');

module.exports = Keyword;