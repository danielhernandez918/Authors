const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    Name: {
        type:String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"]
    },
},{timestamps : true});
// create variable equal to model and export
// const Authorss = mongoose.model('author', AuthorsSchema);
// module.exports = Authors;

module.exports.Authors = mongoose.model('Author', AuthorsSchema)