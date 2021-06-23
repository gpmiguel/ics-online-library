const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adviserSchema = new Schema({
    _id : {type:String},
    adviser: {type: String},
});

const Adviser = mongoose.model('Adviser', adviserSchema, 'acad_paper_advisers');

module.exports = Adviser;