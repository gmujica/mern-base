const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    //description: String,
    email:  {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    /*type: {
        type: String,
        require: true
    },*/
    //date: Date.now
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);