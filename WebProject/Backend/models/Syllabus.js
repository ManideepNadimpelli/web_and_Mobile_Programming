var mongoose = require('mongoose');
var SyllabusSchema = new mongoose.Schema({
    userId: String,
    Syllabus :[{semester: String , course: String}]

});

const Syllabus = mongoose.model('syllabusCollection',SyllabusSchema);

module.exports = Syllabus ;
